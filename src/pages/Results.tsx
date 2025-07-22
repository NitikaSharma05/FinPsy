import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { ArrowRight, RotateCcw, Share2 } from 'lucide-react';
import { QuizResponse, InvestorPersona, BiasScore } from '../types';
import { investorPersonas } from '../data/quizData';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const [persona, setPersona] = useState<InvestorPersona | null>(null);
  const [biasScores, setBiasScores] = useState<BiasScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const responses = JSON.parse(localStorage.getItem('quizResponses') || '[]') as QuizResponse[];
    
    if (responses.length === 0) {
      navigate('/quiz');
      return;
    }

    // Simple algorithm to determine persona based on responses
    // In a real app, this would be more sophisticated
    const calculatePersona = () => {
      // For demo purposes, we'll use a simple scoring system
      let riskTolerance = 0;
      let confidence = 0;
      let emotionalReactivity = 0;
      let planningOrientation = 0;

      responses.forEach(response => {
        if (typeof response.answer === 'number') {
          // Likert scale responses
          if (response.questionId.includes('risk')) {
            riskTolerance += response.answer;
          }
          if (response.questionId.includes('self')) {
            confidence += response.answer;
          }
          if (response.questionId.includes('reactions')) {
            emotionalReactivity += response.answer;
          }
          if (response.questionId.includes('goals')) {
            planningOrientation += response.answer;
          }
        }
      });

      // Determine persona based on scores
      if (planningOrientation > 6 && riskTolerance > 6) {
        return investorPersonas[0]; // Strategic Planner
      } else if (confidence > 8 && riskTolerance > 8) {
        return investorPersonas[1]; // Confident Explorer
      } else if (riskTolerance < 4) {
        return investorPersonas[2]; // Cautious Guardian
      } else {
        return investorPersonas[3]; // Emotional Reactor
      }
    };

    const calculatedPersona = calculatePersona();
    setPersona(calculatedPersona);

    // Generate bias scores
    const scores: BiasScore[] = [
      {
        name: 'Risk Tolerance',
        score: Math.min(Math.max(Math.random() * 100, 20), 90),
        description: 'Your comfort level with investment risk'
      },
      {
        name: 'Loss Aversion',
        score: Math.min(Math.max(Math.random() * 100, 20), 90),
        description: 'Tendency to avoid losses over seeking gains'
      },
      {
        name: 'Overconfidence',
        score: Math.min(Math.max(Math.random() * 100, 20), 90),
        description: 'Belief in your ability to predict markets'
      },
      {
        name: 'Herd Behavior',
        score: Math.min(Math.max(Math.random() * 100, 20), 90),
        description: 'Tendency to follow crowd decisions'
      },
      {
        name: 'Planning Horizon',
        score: Math.min(Math.max(Math.random() * 100, 20), 90),
        description: 'Focus on long-term vs short-term goals'
      }
    ];

    setBiasScores(scores);
    setLoading(false);
  }, [navigate]);

  const handleRetakeQuiz = () => {
    localStorage.removeItem('quizResponses');
    navigate('/quiz');
  };

  const handleShare = () => {
    if (navigator.share && persona) {
      navigator.share({
        title: 'My FinPsy Investor Profile',
        text: `I just discovered I'm a ${persona.name} investor! Find out your investing psychology with FinPsy.`,
        url: window.location.origin
      });
    }
  };

  if (loading || !persona) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Analyzing your responses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Investor Profile
          </h1>
          <p className="text-xl text-gray-600">
            Based on your responses, here's your personalized behavioral finance analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Persona Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{persona.emoji}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {persona.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {persona.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Traits</h3>
                <div className="grid grid-cols-2 gap-2">
                  {persona.traits.map((trait, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Tips</h3>
                <div className="space-y-3">
                  {persona.tips.map((tip, index) => (
                    <div key={index} className="bg-emerald-50 border-l-4 border-emerald-500 p-3 rounded">
                      <p className="text-emerald-700 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bias Scores Chart */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Behavioral Profile
            </h2>

            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={biasScores}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" className="text-sm" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {biasScores.map((score, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">{score.name}</span>
                    <p className="text-xs text-gray-500">{score.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-emerald-600">
                      {Math.round(score.score)}
                    </span>
                    <span className="text-sm text-gray-500">/100</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/simulator"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Explore Portfolio Simulator</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <button
              onClick={handleShare}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Share2 className="h-5 w-5" />
              <span>Share Results</span>
            </button>

            <button
              onClick={handleRetakeQuiz}
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Retake Quiz</span>
            </button>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Your results are saved locally. Use the portfolio simulator to see how your biases 
            might affect your investment performance in different market scenarios.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;