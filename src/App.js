import logo from './logo.svg';
import './App.css';
import SlideShow from './component/SlideShow';
import Gallery from './component/Gallery';
import Footer from './component/Footer'

function App() {
  return (
    <div className="Welcome to Our shop">
    
    <SlideShow/>
    <Gallery />
    <Footer />
    </div>
        
  );
}

export default App;
