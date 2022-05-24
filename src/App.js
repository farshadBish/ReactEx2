import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease'

function App() {
  return (
    <div className="App" style = {{backgroundColor: 'gray'}}>
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
