import NewTweet from "../NewTweet";


function MainFeed() {
    return (
      <div className="container">
        <div>
          <h3>Pagina Inicial</h3>
          <hr/>
          <NewTweet />
          <hr />
        </div>     
      </div>
    );
  }
  
  export default MainFeed;