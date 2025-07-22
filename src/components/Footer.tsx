import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">FinPsy</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering investors with behavioral finance insights to make better financial decisions 
              through understanding psychological biases and decision-making patterns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/quiz" className="text-gray-400 hover:text-white transition-colors duration-200">Take Quiz</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/simulator" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio Simulator</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Behavioral Finance Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Investment Psychology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FinPsy. Built with behavioral finance research and modern web technologies.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This tool is for educational purposes and should not be considered as financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;