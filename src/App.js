import logo from './logo.svg';
import './design.css';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Client from './components/Client';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel />
      <About />
      <Services />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
