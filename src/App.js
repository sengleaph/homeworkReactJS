import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
// import Main2 from './component/Main2';
import SlideShow from './component/SlideShow';
import { Gallery } from './component/Gallery';
import Footer from './component/Footer'

function App() {
  return (
    <div className="Welcome to Our shop">
    <Header />
    <SlideShow />
    <Main />
    {/* <Main2 /> */}
    <Gallery />
    <Footer />
    </div>
        
  );
}

export default App;
