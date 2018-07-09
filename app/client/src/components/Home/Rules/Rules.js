import React from 'react';
import styles from './Rules.css';
import FontAwesome from 'react-fontawesome';
import { Table } from 'react-bootstrap';

const rules = () => {
  return(
    <div className={styles.Rules}>
      <div className={styles.Header}>
        <h1 className={styles.HeaderText}>Rules</h1>
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
            <h2 className={styles.RuleTitle}>Overview</h2>
            <p>3-month Tournament</p>
            <p>30 Players</p>
          </div>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-phone'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <h2 className={styles.RuleTitle}>Tournament</h2>
            <p>3-month Tournament</p>
            <p>30 Players</p>
          </div>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-battery-quarter'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <h2 className={styles.RuleTitle}>Pausing Subscription</h2>
            <p>3-month Tournament</p>
            <p>30 Players</p>
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
          <h2 className={styles.RuleTitle}>Points System</h2>
            <Table responsive>
              <thead>
                <tr>
                  <th>Placement</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>14,706</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10,023</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>8,900</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>6,727</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>4,755</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>3,721</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={styles.Rule}>
            <FontAwesome
            className='fa-times-circle'
            name='education'
            size='3x'
            style={{ color: '#f74b38' }}
            />
            <h2 className={styles.RuleTitle}>Prize Pool</h2>
            <Table responsive>
              <thead>
                <tr>
                  <th>Placement</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>$1,000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>$400</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>$2507</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>$150</td>
                </tr>
              </tbody>
            </Table>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default rules;