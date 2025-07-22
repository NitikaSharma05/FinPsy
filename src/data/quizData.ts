import { QuizQuestion, InvestorPersona, Bias } from '../types';

export const quizSections = [
  {
    id: 'risk-attitude',
    title: 'Investment Comfort and Risk Attitude',
    description: 'Understand your comfort level with investment risks and market volatility.',
    path: '/quiz/risk-attitude'
  },
  {
    id: 'decision-making',
    title: 'Decision-Making Style',
    description: 'Discover how you approach investment decisions and process information.',
    path: '/quiz/decision-making'
  },
  {
    id: 'investment-reactions',
    title: 'Real-Life Investment Reactions',
    description: 'Explore how you react to real market scenarios and investment outcomes.',
    path: '/quiz/investment-reactions'
  },
  {
    id: 'goal-planning',
    title: 'Goal Clarity and Planning',
    description: 'Assess your approach to setting and achieving financial goals.',
    path: '/quiz/goal-planning'
  },
  {
    id: 'self-view',
    title: 'Self-View as an Investor',
    description: 'Understand your confidence and perception of your investment abilities.',
    path: '/quiz/self-view'
  }
];

export const quizQuestions: QuizQuestion[] = [
  // Risk Attitude Questions
  {
    id: 'risk-1',
    section: 'risk-attitude',
    question: 'When you see your investment portfolio drop by 20% in a month, what\'s your first instinct?',
    type: 'multiple-choice',
    options: [
      'Sell everything immediately to prevent further losses',
      'Feel anxious but hold onto my investments',
      'See it as a buying opportunity and invest more',
      'Review my strategy but stay calm'
    ]
  },
  {
    id: 'risk-2',
    section: 'risk-attitude',
    question: 'How comfortable are you with the idea that your investments might lose value?',
    type: 'likert',
    options: ['Very uncomfortable', 'Uncomfortable', 'Neutral', 'Comfortable', 'Very comfortable']
  },
  {
    id: 'risk-3',
    section: 'risk-attitude',
    question: 'You have $10,000 to invest. Which option appeals to you most?',
    type: 'multiple-choice',
    options: [
      'Safe government bonds with 3% guaranteed return',
      'Balanced mutual fund with potential 7% return',
      'Growth stocks with potential 15% return but higher risk',
      'Cryptocurrency with potential 50% return but very high risk'
    ]
  },

  // Decision-Making Questions
  {
    id: 'decision-1',
    section: 'decision-making',
    question: 'When making investment decisions, I prefer to:',
    type: 'multiple-choice',
    options: [
      'Follow expert recommendations and popular trends',
      'Do extensive research and analysis myself',
      'Go with my gut feeling',
      'Use a systematic, rule-based approach'
    ]
  },
  {
    id: 'decision-2',
    section: 'decision-making',
    question: 'How much time do you typically spend researching before making an investment?',
    type: 'likert',
    options: ['Very little', 'A little', 'Moderate amount', 'Quite a bit', 'Extensive research']
  },
  {
    id: 'decision-3',
    section: 'decision-making',
    question: 'When everyone is talking about a hot stock, you:',
    type: 'multiple-choice',
    options: [
      'Jump in quickly before missing out',
      'Wait and see what happens first',
      'Do your own research regardless of the hype',
      'Avoid it because everyone else is buying'
    ]
  },

  // Investment Reactions Questions
  {
    id: 'reactions-1',
    section: 'investment-reactions',
    question: 'You bought a stock at $100. It drops to $80. What do you do?',
    type: 'multiple-choice',
    options: [
      'Sell immediately to limit losses',
      'Hold and hope it recovers',
      'Buy more at the lower price',
      'Set a stop-loss and stick to it'
    ]
  },
  {
    id: 'reactions-2',
    section: 'investment-reactions',
    question: 'How often do you check your investment portfolio?',
    type: 'likert',
    options: ['Multiple times daily', 'Daily', 'Weekly', 'Monthly', 'Rarely']
  },
  {
    id: 'reactions-3',
    section: 'investment-reactions',
    question: 'After a big market crash, you would most likely:',
    type: 'multiple-choice',
    options: [
      'Panic and sell everything',
      'Stop looking at your portfolio for a while',
      'See it as a buying opportunity',
      'Stick to your long-term plan'
    ]
  },

  // Goal Planning Questions
  {
    id: 'goals-1',
    section: 'goal-planning',
    question: 'How clear are your investment goals?',
    type: 'likert',
    options: ['Very unclear', 'Somewhat unclear', 'Neutral', 'Somewhat clear', 'Very clear']
  },
  {
    id: 'goals-2',
    section: 'goal-planning',
    question: 'Your investment timeline is primarily:',
    type: 'multiple-choice',
    options: [
      'Short-term (less than 2 years)',
      'Medium-term (2-10 years)',
      'Long-term (10+ years)',
      'I haven\'t really thought about it'
    ]
  },
  {
    id: 'goals-3',
    section: 'goal-planning',
    question: 'How often do you review and adjust your investment strategy?',
    type: 'multiple-choice',
    options: [
      'Never - I set it and forget it',
      'Only when something major happens',
      'Every few months',
      'Monthly or more frequently'
    ]
  },

  // Self-View Questions
  {
    id: 'self-1',
    section: 'self-view',
    question: 'How confident are you in your investment abilities?',
    type: 'likert',
    options: ['Not confident', 'Slightly confident', 'Moderately confident', 'Very confident', 'Extremely confident']
  },
  {
    id: 'self-2',
    section: 'self-view',
    question: 'Compared to other investors, I believe my returns are:',
    type: 'multiple-choice',
    options: [
      'Below average',
      'Average',
      'Above average',
      'Much better than average'
    ]
  },
  {
    id: 'self-3',
    section: 'self-view',
    question: 'When an investment doesn\'t perform as expected, I usually think:',
    type: 'multiple-choice',
    options: [
      'I made a mistake in my analysis',
      'The market is unpredictable',
      'I was unlucky with timing',
      'I should have trusted my instincts more'
    ]
  }
];

export const investorPersonas: InvestorPersona[] = [
  {
    id: 'strategic-planner',
    name: 'Strategic Planner',
    emoji: '🎯',
    description: 'You approach investing with careful planning and systematic analysis.',
    traits: ['Methodical', 'Research-driven', 'Long-term focused', 'Risk-aware'],
    tips: [
      'Continue your systematic approach - it\'s your strength',
      'Consider setting up automatic rebalancing',
      'Don\'t over-analyze - sometimes good enough is perfect'
    ]
  },
  {
    id: 'confident-explorer',
    name: 'Confident Explorer',
    emoji: '🚀',
    description: 'You\'re comfortable with risk and confident in your investment decisions.',
    traits: ['Risk-tolerant', 'Confident', 'Growth-oriented', 'Opportunistic'],
    tips: [
      'Watch out for overconfidence bias',
      'Consider diversifying to manage risk',
      'Set stop-losses to protect against major downturns'
    ]
  },
  {
    id: 'cautious-guardian',
    name: 'Cautious Guardian',
    emoji: '🛡️',
    description: 'You prioritize protecting your wealth over aggressive growth.',
    traits: ['Risk-averse', 'Conservative', 'Stability-focused', 'Patient'],
    tips: [
      'Consider gradually increasing risk tolerance',
      'Don\'t let fear prevent you from growing wealth',
      'Inflation is also a risk to consider'
    ]
  },
  {
    id: 'emotional-reactor',
    name: 'Emotional Reactor',
    emoji: '🎭',
    description: 'Your investment decisions are often influenced by emotions and market sentiment.',
    traits: ['Emotion-driven', 'Market-sensitive', 'Reactive', 'Intuitive'],
    tips: [
      'Create rules to follow during emotional moments',
      'Consider dollar-cost averaging to reduce timing risk',
      'Take breaks from checking your portfolio frequently'
    ]
  }
];

export const commonBiases: Bias[] = [
  {
    id: 'loss-aversion',
    name: 'Loss Aversion',
    description: 'The tendency to prefer avoiding losses over acquiring equivalent gains.',
    tip: 'Focus on long-term goals rather than short-term fluctuations.',
    icon: '📉'
  },
  {
    id: 'herd-behavior',
    name: 'Herd Behavior',
    description: 'Following the crowd and making decisions based on what others are doing.',
    tip: 'Do your own research before following popular investment trends.',
    icon: '🐑'
  },
  {
    id: 'overconfidence',
    name: 'Overconfidence',
    description: 'Overestimating your ability to predict market movements or pick winners.',
    tip: 'Stay humble and diversify your investments to manage risk.',
    icon: '🎯'
  },
  {
    id: 'anchoring',
    name: 'Anchoring Bias',
    description: 'Relying too heavily on the first piece of information encountered.',
    tip: 'Consider multiple data points and perspectives before making decisions.',
    icon: '⚓'
  },
  {
    id: 'confirmation-bias',
    name: 'Confirmation Bias',
    description: 'Seeking information that confirms your existing beliefs.',
    tip: 'Actively seek out opposing viewpoints and challenging information.',
    icon: '✅'
  }
];