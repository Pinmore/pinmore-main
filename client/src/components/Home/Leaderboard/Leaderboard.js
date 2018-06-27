import React from 'react';
import styles from './Leaderboard.css';

const leaderboard = (props) => {
  return(
    <div className={styles.Leaderboard}>
      <div className={styles.Header}>
        <div className={styles.HeaderText}>LEADERBOARD</div>
        <hr/>
      </div>
    </div>
  )
}
export default leaderboard;