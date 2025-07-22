import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Users, BookOpen, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      icon: Brain,
      title: 'Behavioral Finance',
      description: 'The study of psychological influences on financial decisions and market outcomes.',
      details: 'Behavioral finance combines psychology and economics to explain why people make irrational financial decisions. It challenges the traditional assumption that investors always act rationally.'
    },
    {
      icon: TrendingUp,
      title: 'Loss Aversion',
      description: 'The tendency to prefer avoiding losses over acquiring equivalent gains.',
      details: 'Research shows that losses are psychologically twice as powerful as gains. This bias can lead to poor investment decisions like holding losing stocks too long or selling winners too early.'
    },
    {
      icon: Users,
      title: 'Herd Behavior',
      description: 'Following the crowd in investment decisions rather than independent analysis.',
      details: 'Investors often follow what others are doing, leading to market bubbles and crashes. Understanding this bias helps you make more independent, rational investment choices.'
    },
    {
      icon: Target,
      title: 'Overconfidence Bias',
      description: 'Overestimating your ability to predict market movements or pick winners.',
      details: 'Many investors believe they can beat the market consistently, leading to excessive trading and poor diversification. Recognizing this bias promotes humility and better risk management.'
    },
    {
      icon: BookOpen,
      title: 'Anchoring Bias',
      description: 'Relying too heavily on the first piece of information encountered.',
      details: 'Investors often anchor to purchase prices or recent highs/lows when making decisions. This can prevent objective evaluation of current market conditions and opportunities.'
    },
    {
      icon: Award,
      title: 'Confirmation Bias',
      description: 'Seeking information that confirms existing beliefs while ignoring contradictory evidence.',
      details: 'This bias leads investors to seek out information that supports their investment thesis while dismissing negative news. It prevents objective decision-making and proper risk assessment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Understanding Behavioral Finance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the psychological biases that influence investment decisions and 
            how awareness can lead to better financial outcomes.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              FinPsy was created to bridge the gap between academic behavioral finance research and 
              practical investment decision-making. We believe that understanding your psychological 
              biases is the first step toward becoming a more successful investor. Our platform 
              combines scientific insights with interactive tools to help you recognize and overcome 
              the mental traps that can derail your financial goals.
            </p>
          </div>
        </motion.div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-3 rounded-xl w-fit mb-4">
                <concept.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {concept.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {concept.description}
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {concept.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Foundation */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Built on Scientific Research</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Our quiz and analysis are based on decades of behavioral finance research from 
              Nobel Prize winners like Daniel Kahneman and Richard Thaler, as well as extensive 
              studies from leading academic institutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-blue-200">Years of Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-blue-200">Nobel Prizes</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Use */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Get the Most from FinPsy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Taking the Quiz</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Answer honestly - there are no right or wrong answers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Think about your actual behavior, not ideal behavior</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Consider recent investment decisions you've made</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">After Getting Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Use the portfolio simulator to see bias impacts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Implement the personalized tips gradually</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Retake the quiz periodically to track progress</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;