import React from 'react';
import styles from './Footer.css';
import Spreadex from '../../../img/spreadex_logo_trans.png';

const footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Info}>
        <div>
          <img src={Spreadex} />
          <p>CUE Society is a members-only platform that allows members to engage with one another in discussions regarding topics that impact our world.</p>
        </div>
        <div>
          <h2>Get Notified for Member Events</h2>
          <p>We offer a series of cool events for our users (eg. free drinks). To be added to our list, send your name to our Kakao PlusFriends below.</p>
        </div>
      </div>
      <div className={styles.Copyright}>
        <p>© Copyright CUE Society 2018</p>
        <p>Made with  in South Korea</p>
      </div>
    </div>
  )
}

export default footer;