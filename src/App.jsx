import React, { useState, useEffect } from 'react';
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification';


function App() {
  const initializeFeedbackTypes = () => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initializeFeedbackTypes());

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedbackTypes.good / totalFeedback) * 100) : 0;
  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Description />
      {!hasFeedback && <Notification />}
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} hasFeedback={hasFeedback} />
      {totalFeedback > 0 &&

        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
      }
    </div>
  );
}

export default App;
