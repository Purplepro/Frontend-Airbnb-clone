
import './App.scss';
import Navbar from './Components/A-Nav/Navbar';
import ImFlexibleComp from './Components/C-ImFlexible/PictureComp';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="top-section">
        <ImFlexibleComp/>
      </div>
      <div className="second-section"></div>
      
    </div>
  );
}

export default App;
