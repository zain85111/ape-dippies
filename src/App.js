import './App.css';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { MainContent } from './components/MainContent';
import Navbar from './components/Navbar';
import VisionSection from './components/VisionSection';

function App() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <MainContent />
        <AboutSection />
        <VisionSection />
        <Footer/>
      </div>
    );
}

export default App;
