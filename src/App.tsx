
import HeaderTop from "./components/Header/HeaderTop";
import HeaderCenter from "./components/Header/HeaderCenter";
import HeaderBottom from "./components/Header/HeaderBottom";
import Slider from './components/Slider/SliderComponent';
import Main from './components/Main/Main';
import Main2 from './components/Main/Main2';           //This file is Not Responsive
import Services from './components/Services/Services'; //This file is Not Responsive
import Team from './components/Team/Team';             //This file is Not Responsive
import Profit from './components/Profit/Profit';       //This file is Not Responsive
import Gallery from './components/Gallery/Gallery';    //This file is Not Responsive
import Blog from './components/Blog/Blog'       
import Services2 from './components/Services/Services2';  //This file is Not Responsive
import Footer from './components/Footer/Footer';


// import './assets/styles/custom.css';

function App() {
  return (
    <div>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
      <Slider />
      <Main />
      <Main2 />
      <Services />
      <Team />
      <Profit />
      <Gallery />
      <Blog />
      <Services2 />
      <Footer />
      
    </div>
  );
}

export default App;
