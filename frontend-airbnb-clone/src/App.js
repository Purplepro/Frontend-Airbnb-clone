
import './App.scss';
import './Components/A-Nav/Nav.scss';
import Navbar from './Components/A-Nav/Navbar';
import ImFlexibleComp from './Components/C-ImFlexible/PictureComp';
import ExpandedSearchButton from './Components/A-Nav/ExpandedSearchButton';


function App() {


  
  return (
    <div className="App">
      <div>

      </div>
      <Navbar/>
      <div className="top-section">
        <ImFlexibleComp/>
      </div>
      <div className="second-section"></div>
      <ExpandedSearchButton/>
    </div>
  );
}

export default App;
