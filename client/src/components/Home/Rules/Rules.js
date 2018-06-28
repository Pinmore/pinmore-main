import React from 'react';
import styles from './Rules.css';
import FontAwesome from 'react-fontawesome';


const rules = () => {
  return(
    <div className={styles.Rules}>
      <div className={styles.Header}>
        <div className={styles.HeaderText}>Rules</div>
        <hr/>
      </div>
      <div className={styles.RulesContent}>
        <div className={styles.RulesRow}>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-graduation-cap'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <div className={styles.RuleTitle}>Overview</div>
            <div>3-month Tournament 30 Players</div>
          </div>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-phone'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <div className={styles.RuleTitle}>Tournament</div>
            <div>3-month Tournament 30 Players</div>
          </div>
        </div>
        <div className={styles.RulesRow}>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-times-circle'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <div className={styles.RuleTitle}>Points System</div>
            <div>3-month Tournament 30 Players</div>
          </div>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-battery-quarter'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <div className={styles.RuleTitle}>Pausing Subscription</div>
            <div>3-month Tournament 30 Players</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rules;