import React from 'react';
import styles from './Header.css';
import Logo from '../../../img/logo_trans_yellow.png';

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>
        <div className={styles.Message}>WELCOME!</div>
        <a href="index.html">
          <img src={Logo} alt=""/>
        </a>
        <div className={styles.Message__two}>Virtual Golf Tournaments</div>
      </div>
      <hr/>
      <div className={styles.HeaderBottom}>
        <div className={styles.BottomMessage}>Brought to you by</div>
        <img className={styles.GolfioLogo} src="https://cdn3.bigcommerce.com/s-e2q6mh3/product_images/uploaded_images/footer-logo.png?t=1499899063&_ga=2.221937624.1159005451.1499873479-1215408688.1499873479"/>
        <button className={styles.HeaderButton}>SEE LEADERBOARD ></button>
      </div>
    </div>
  )
}

export default Header;