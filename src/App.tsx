import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    /* The Basename tells React that the app starts in a subfolder */
    <Router basename="/volley_juniors_salzburg">
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Because of the Basename, "/" now automatically matches the subfolder */}
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* IMPORTANT: If a path is not recognized, load the Home page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;