
import './App.scss';
import './Components/A-Nav/Nav.scss';
import Navbar from './Components/A-Nav/Navbar';
import ImFlexibleComp from './Components/C-ImFlexible/PictureComp';
import ExpandedSearchButton from './Components/A-Nav/ExpandedSearchButton';
import GiftCard from './Components/F-AirbnbGiftCards/GiftCard';
import Inspiration from './Components/E-Inpiration/Inspiration';
import Experiences from './Components/G-Experiences/Experiences';


function App() {


  
  return (
    <div className="App">
      <div>

      </div>
      <Navbar/>
      <div className="top-section">
        <ImFlexibleComp/>
      </div>
      <GiftCard/>
      <div className="second-section">
        <Inspiration/>
        <Experiences/>
      </div>
      {/* <ExpandedSearchButton/> */}
    </div>
  );
}

export default App;
