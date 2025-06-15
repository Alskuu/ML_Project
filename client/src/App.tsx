import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import ClassDetail from './pages/ClassDetail';
import About from './pages/About';
import LinearRegression from './pages/LinearRegression';
import ProbabilisticClassifier from './pages/ProbabilisticClassifier';
import SupportVectorMachines from './pages/SupportVectorMachines';
import UnsupervisedLearning from './pages/UnsupervisedLearning';
import DimensionalityReduction from './pages/DimensionalityReduction';
import Clustering from './pages/Clustering';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';

// NavLink component for active state styling
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200
        ${isActive 
          ? 'text-white' 
          : 'text-white/90 hover:text-white'
        }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 transition-transform duration-200" />
      )}
    </Link>
  );
};

// Mobile menu component
const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  return (
    <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-600 to-purple-600 shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-xl font-bold text-white">ML Classes</span>
          <button onClick={onClose} className="text-white/90 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <div className="space-y-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
          {/* Navigation Bar */}
          <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center space-x-3 group">
                    <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                      ML Classes
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/classes">Classes</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <Link
                    to="/classes"
                    className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Learning
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="text-white/90 hover:text-white focus:outline-none transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50">
              <div className="p-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/class/:id" element={<ClassDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/linear-regression" element={<LinearRegression />} />
                  <Route path="/probabilistic-classifier" element={<ProbabilisticClassifier />} />
                  <Route path="/support-vector-machines" element={<SupportVectorMachines />} />
                  <Route path="/unsupervised-learning" element={<UnsupervisedLearning />} />
                  <Route path="/dimensionality-reduction" element={<DimensionalityReduction />} />
                  <Route path="/clustering" element={<Clustering />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">ML Classes</span>
                </div>
                <div className="flex space-x-6">
                  <Link to="/" className="text-white/90 hover:text-white transition-colors duration-300">Home</Link>
                  <Link to="/classes" className="text-white/90 hover:text-white transition-colors duration-300">Classes</Link>
                  <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300">About</Link>
                </div>
              </div>
              <div className="mt-8 text-center text-white/70 text-sm">
                © {new Date().getFullYear()} ML Classes. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 