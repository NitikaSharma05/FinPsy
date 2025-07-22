import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { commonBiases } from '../data/quizData';

const BiasesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredBias, setHoveredBias] = useState<string | null>(null);

  return (
    <section id="biases" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Your Biases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hover over each card to learn about common psychological biases that affect investment decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonBiases.map((bias, index) => (
            <motion.div
              key={bias.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredBias(bias.id)}
              onHoverEnd={() => setHoveredBias(null)}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <div className="text-4xl mb-4">{bias.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {bias.name}
                </h3>

                <AnimatePresence mode="wait">
                  {hoveredBias === bias.id ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {bias.description}
                      </p>
                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                        <p className="text-emerald-700 font-medium text-sm">
                          💡 {bias.tip}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600"
                    >
                      {bias.description.substring(0, 80)}...
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hover to learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to discover which biases affect your investment decisions?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/quiz'}
          >
            Take the Quiz to Discover Your Type
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BiasesSection;