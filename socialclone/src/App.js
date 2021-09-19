import { useEffect, useState } from "react";
import MainFeed from "./components/MainFeed";
import SideBar from "./components/SideBar";
import { instance } from "./utils/Api";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, setIsLoadingUser } from './redux/core/actions/usersActions';
import { loadTweets, setIsLoadingtweets } from './redux/core/actions/tweetsActions';

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const tweets = useSelector((state) => state.tweets)

  useEffect(() => {

    dispatch(setIsLoadingUser())
    dispatch(loadUser())
    dispatch(setIsLoadingtweets())
    dispatch(loadTweets())
  }, [])

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar user={user.isLoading == false? user.user.data : {}} />
        <MainFeed data={tweets.isLoading == false? tweets.tweets.data : []} />
      </div>
    </div>
  );
}

export default App;
