import React from 'react';
import styles from './Feedback.module.css'


function Feedback({ feedbackTypes, totalFeedback, positivePercentage }) {
  

  return (
    <div>
    
        
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p className={styles.positive}>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;