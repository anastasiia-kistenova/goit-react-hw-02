import React from 'react';
// import styles from './Feedback.module.css'
import Notification from '../Notification/Notification';


function Feedback({ feedbackTypes }) {
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <div>
      {totalFeedback > 0 ? (
        <div>
        
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
          <p>Total: {totalFeedback}</p>
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default Feedback;