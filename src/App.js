import './App.css';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { MainContent } from './components/MainContent';
import Sidebar from './components/Sidebar';
import VisionSection from './components/VisionSection';

function App() {
    return (
      <div className="App">
        <Sidebar/>
        <Hero />
        <MainContent />
        <AboutSection />
        <VisionSection />
        <Footer/>
      </div>
    );
}

export default App;
