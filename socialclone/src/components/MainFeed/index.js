import NewTweet from "../NewTweet";
import Tweet from "../Tweet";

function MainFeed({ data }) {
    return (
      <div className="container" style={{ marginLeft: '0px', width: '600px' }}>
        <div>
          <h3>Pagina Inicial</h3>
          <hr />
          <NewTweet />
          <hr />
          {data.map(item => <Tweet data={item}/>)}
        </div>
      </div>
    );
}

export default MainFeed;