import React from 'react';
import styles from './Options.module.css'


function Options({ updateFeedback, resetFeedback, hasFeedback }) {
  return (
    <div className={styles.btns}>
      <button className={styles.btn} onClick={() => updateFeedback('good')}>Good</button>
      <button className={styles.btn} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={styles.btn} onClick={() => updateFeedback('bad')}>Bad</button>
      {hasFeedback && <button className={styles.btnReset} onClick={resetFeedback}>Reset</button>}
    </div>
  );
}


export default Options;