import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    /* Der Basename sagt React, dass die App im Unterordner startet */
    <Router basename="/volley_juniors_salzburg">
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Durch den Basename matcht "/" jetzt automatisch auf den Unterordner */}
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* WICHTIG: Falls ein Pfad nicht erkannt wird, lade die Home-Seite */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;