import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Award, RotateCcw } from 'lucide-react';

const PortfolioSimulator: React.FC = () => {
  const [lossAversion, setLossAversion] = useState(50);
  const [panicSelling, setPanicSelling] = useState(50);
  const [delayedInvesting, setDelayedInvesting] = useState(50);
  const [badges, setBadges] = useState<string[]>([]);

  // Generate portfolio performance data based on bias settings
  const generatePortfolioData = () => {
    const baseData = [
      { month: 'Jan', optimal: 100, biased: 100 },
      { month: 'Feb', optimal: 105, biased: 105 },
      { month: 'Mar', optimal: 95, biased: 95 },
      { month: 'Apr', optimal: 110, biased: 108 },
      { month: 'May', optimal: 115, biased: 110 },
      { month: 'Jun', optimal: 108, biased: 102 },
      { month: 'Jul', optimal: 120, biased: 115 },
      { month: 'Aug', optimal: 125, biased: 118 },
      { month: 'Sep', optimal: 115, biased: 105 },
      { month: 'Oct', optimal: 130, biased: 120 },
      { month: 'Nov', optimal: 135, biased: 125 },
      { month: 'Dec', optimal: 140, biased: 128 }
    ];

    // Adjust biased performance based on bias levels
    return baseData.map(point => ({
      ...point,
      biased: point.biased * (1 - (lossAversion + panicSelling + delayedInvesting) / 300 * 0.3)
    }));
  };

  const portfolioData = generatePortfolioData();
  const finalOptimal = portfolioData[portfolioData.length - 1].optimal;
  const finalBiased = portfolioData[portfolioData.length - 1].biased;
  const performanceGap = ((finalOptimal - finalBiased) / finalOptimal * 100);

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value);
    
    // Award badges for bias-free behavior
    const newBadges = [...badges];
    if (value < 30 && !badges.includes('low-bias')) {
      newBadges.push('low-bias');
      setBadges(newBadges);
    }
  };

  const resetSimulation = () => {
    setLossAversion(50);
    setPanicSelling(50);
    setDelayedInvesting(50);
    setBadges([]);
  };

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
            Portfolio Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how your behavioral biases might impact your investment performance. 
            Adjust the sliders to see real-time changes in portfolio outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bias Controls</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loss Aversion: {lossAversion}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={lossAversion}
                    onChange={(e) => handleSliderChange(setLossAversion, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Higher values mean stronger tendency to avoid losses
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Panic Selling: {panicSelling}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={panicSelling}
                    onChange={(e) => handleSliderChange(setPanicSelling, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Likelihood to sell during market downturns
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delayed Investing: {delayedInvesting}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={delayedInvesting}
                    onChange={(e) => handleSliderChange(setDelayedInvesting, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Tendency to delay investment decisions
                  </p>
                </div>
              </div>

              <button
                onClick={resetSimulation}
                className="w-full mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Badges */}
            {badges.length > 0 && (
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>Achievements</span>
                </h3>
                <div className="space-y-2">
                  {badges.includes('low-bias') && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-600">🏆</span>
                        <span className="text-yellow-800 font-medium">Bias-Free Investor</span>
                      </div>
                      <p className="text-yellow-700 text-sm mt-1">
                        You've minimized emotional biases!
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Chart and Results */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Performance Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Performance Comparison</h2>
              
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={portfolioData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        `$${value.toFixed(0)}`,
                        name === 'optimal' ? 'Optimal Strategy' : 'Your Strategy'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="optimal" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      name="optimal"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="biased" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      name="biased"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <span className="font-medium text-emerald-800">Optimal Strategy</span>
                  </div>
                  <p className="text-2xl font-bold text-emerald-600">
                    ${finalOptimal.toFixed(0)}
                  </p>
                  <p className="text-emerald-700 text-sm">Final portfolio value</p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-800">Your Strategy</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">
                    ${finalBiased.toFixed(0)}
                  </p>
                  <p className="text-red-700 text-sm">With behavioral biases</p>
                </div>
              </div>
            </div>

            {/* Performance Analysis */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Analysis</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">
                    -{performanceGap.toFixed(1)}%
                  </p>
                  <p className="text-gray-600 text-sm">Performance Gap</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">
                    ${(finalOptimal - finalBiased).toFixed(0)}
                  </p>
                  <p className="text-gray-600 text-sm">Opportunity Cost</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">
                    {(100 - (lossAversion + panicSelling + delayedInvesting) / 3).toFixed(0)}%
                  </p>
                  <p className="text-gray-600 text-sm">Rationality Score</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-medium text-blue-800 mb-2">Key Insights</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Reducing emotional biases can significantly improve returns</li>
                  <li>• Consistent investing beats trying to time the market</li>
                  <li>• Small behavioral changes compound over time</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSimulator;