import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target, Brain, TrendingUp, Users } from 'lucide-react';
import { quizSections } from '../data/quizData';

const QuizOverview: React.FC = () => {
  const sectionIcons = [Target, Brain, TrendingUp, Users, ArrowRight];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Behavioral Finance Quiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover your investing psychology through five comprehensive sections. 
            Each section explores different aspects of your financial decision-making patterns.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span>5 minutes total</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <span>15 questions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-emerald-600" />
              <span>Personalized insights</span>
            </div>
          </div>
        </motion.div>

        {/* Quiz Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {quizSections.map((section, index) => {
            const IconComponent = sectionIcons[index];
            
            return (
              <motion.div
                key={section.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-3 rounded-xl">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-200">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>

                <Link
                  to={section.path}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 group-hover:scale-105"
                >
                  <span>Take Quiz</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Take All Sections */}
        <motion.div
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for the Complete Experience?
          </h2>
          <p className="text-gray-600 mb-6">
            Take all sections in sequence for the most comprehensive analysis of your investing psychology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quiz/risk-attitude"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Complete Quiz</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full">
            <span>💡</span>
            <span>Complete all sections for the most accurate investor profile</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizOverview;