import MainFeed from "./components/MainFeed";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container">
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideBar />
        <MainFeed />
      </div>     
    </div>
  );
}

export default App;
