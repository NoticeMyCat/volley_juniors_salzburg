import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    /* Der basename sorgt dafür, dass alle Links automatisch /volley_juniors_salzburg/ voranstellen */
    <Router basename="/volley_juniors_salzburg">
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Pfade bleiben einfach, da der Router den basename intern managed */}
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* Fallback: Falls jemand eine falsche URL eingibt, zurück zur Startseite */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;