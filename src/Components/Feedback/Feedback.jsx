import React from 'react';
import styles from './Feedback.module.css'
import Notification from '../Notification/Notification';


function Feedback({ feedbackTypes, totalFeedback, positivePercentage }) {
  

  return (
    <div>
      {totalFeedback > 0 ? (
        <div>
        
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p className={styles.positive}>Positive: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default Feedback;