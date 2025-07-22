import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { quizQuestions, quizSections } from '../data/quizData';
import { QuizResponse } from '../types';

const QuizSection: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);

  const section = quizSections.find(s => s.id === sectionId);
  const sectionQuestions = quizQuestions.filter(q => q.section === sectionId);

  useEffect(() => {
    if (!section || sectionQuestions.length === 0) {
      navigate('/quiz');
    }
  }, [section, sectionQuestions, navigate]);

  useEffect(() => {
    // Reset selected answer when question changes
    setSelectedAnswer(null);
    
    // Check if we already have a response for this question
    const currentQuestion = sectionQuestions[currentQuestionIndex];
    if (currentQuestion) {
      const existingResponse = responses.find(r => r.questionId === currentQuestion.id);
      if (existingResponse) {
        setSelectedAnswer(existingResponse.answer);
      }
    }
  }, [currentQuestionIndex, responses, sectionQuestions]);

  if (!section || sectionQuestions.length === 0) {
    return null;
  }

  const currentQuestion = sectionQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / sectionQuestions.length) * 100;

  const handleAnswerSelect = (answer: string | number) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Save the response
      const newResponse: QuizResponse = {
        questionId: currentQuestion.id,
        answer: selectedAnswer
      };

      setResponses(prev => {
        const filtered = prev.filter(r => r.questionId !== currentQuestion.id);
        return [...filtered, newResponse];
      });

      if (currentQuestionIndex < sectionQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Section completed - save to localStorage and navigate
        const allResponses = [...responses.filter(r => r.questionId !== currentQuestion.id), newResponse];
        const existingResponses = JSON.parse(localStorage.getItem('quizResponses') || '[]');
        const updatedResponses = [...existingResponses.filter((r: QuizResponse) => 
          !allResponses.find(nr => nr.questionId === r.questionId)
        ), ...allResponses];
        
        localStorage.setItem('quizResponses', JSON.stringify(updatedResponses));
        
        // Navigate to next section or results
        const currentSectionIndex = quizSections.findIndex(s => s.id === sectionId);
        if (currentSectionIndex < quizSections.length - 1) {
          const nextSection = quizSections[currentSectionIndex + 1];
          navigate(nextSection.path);
        } else {
          navigate('/results');
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleBackToOverview = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={handleBackToOverview}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Quiz Overview</span>
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span>Question {currentQuestionIndex + 1} of {sectionQuestions.length}</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full bg-gray-200 rounded-full h-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion.type === 'likert' ? index : option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswer === (currentQuestion.type === 'likert' ? index : option)
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {selectedAnswer === (currentQuestion.type === 'likert' ? index : option) && (
                      <Check className="h-5 w-5 text-emerald-600" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              currentQuestionIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`flex items-center space-x-2 px-8 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedAnswer === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105'
            }`}
          >
            <span>{currentQuestionIndex === sectionQuestions.length - 1 ? 'Complete Section' : 'Next'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Section Progress */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full">
            <span>📊</span>
            <span>Section {quizSections.findIndex(s => s.id === sectionId) + 1} of {quizSections.length}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizSection;