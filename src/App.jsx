import React, { useState } from 'react';
import Description from './Components/Description/Description'
import Feedback from './Components/Feedback/Feedback'
import Options from './Components/Options/Options'


function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

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
  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} hasFeedback={hasFeedback} />
      <Feedback feedbackTypes={feedbackTypes} />
     
    </div>
  );
}

  
  

export default App;


