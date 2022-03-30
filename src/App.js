import './App.css';
import Hero from './components/Hero';
import { MainContent } from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <MainContent/>
      </div>
    );
}

export default App;
