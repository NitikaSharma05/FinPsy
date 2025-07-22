import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuizOverview from './pages/QuizOverview';
import QuizSection from './pages/QuizSection';
import Results from './pages/Results';
import PortfolioSimulator from './pages/PortfolioSimulator';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizOverview />} />
          <Route path="/quiz/:sectionId" element={<QuizSection />} />
          <Route path="/results" element={<Results />} />
          <Route path="/simulator" element={<PortfolioSimulator />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;