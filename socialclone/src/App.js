import { useEffect, useState } from "react";
import MainFeed from "./components/MainFeed";
import SideBar from "./components/SideBar";
import { instance } from "./utils/Api";

function App() {

  const [data, setData] = useState([])
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUsers();
    callAPI();   
  }, [])

  function callAPI() {
    instance.get('http://localhost:3333/tweets/')
      .then(res => { setData(res.data) })
      .catch((err) => console.log(err))
  }

  function getUsers() {
    instance.get('http://localhost:3333/users/1')
      .then(res => { setUserInfo(res.data) })
      .catch((err) => console.log(err))
  }
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar user={userInfo} />
        <MainFeed data={data} />
      </div>
    </div>
  );
}

export default App;
