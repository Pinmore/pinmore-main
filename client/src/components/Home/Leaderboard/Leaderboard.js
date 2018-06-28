import React, { Component } from 'react';
import styles from './Leaderboard.css';
import Table from './Table/Table';
// import { Table } from 'react-bootstrap';

// let data = [
//   {rank: 1, player: 'Mark Otto', points: '1,000'},
//   {rank: 2, player: 'Sean Bloke', points: '400'},
//   {rank: 3, player: 'Jard Mosely', points: '300'},
//   {rank: 4, player: 'James Heart', points: '250'},
//   {rank: 5, player: 'Andrew Cortes', points: '200'},
//   {rank: 6, player: 'Chris Johnson', points: '150'}
// ]

const leaderboard = (props) => {
  return(
    <div className={styles.Leaderboard}>
      <div className={styles.Header}>
        <div className={styles.HeaderText}>LEADERBOARD</div>
        <hr/>
      </div>
      <Table />
      <button className={styles.RegisterButton}>REGISTER ></button>
    </div>
  )
}
export default leaderboard;