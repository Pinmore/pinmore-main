import React from 'react';
import styles from './Table.css';
import { Table } from 'react-bootstrap';

const table = () => {
  return (
  <Table responsive>
    <thead>
      <tr>
        <th>Rank</th>
        <th className={styles.Player}>Player</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td className={styles.Player}>Mark Otto</td>
        <td>1,000</td>
      </tr>
      <tr>
        <td>2</td>
        <td className={styles.Player}>Sean Bloke</td>
        <td>400</td>
      </tr>
      <tr>
        <td>3</td>
        <td className={styles.Player}>Jared Mosely</td>
        <td>300</td>
      </tr>
      <tr>
        <td>4</td>
        <td className={styles.Player}>James Heart</td>
        <td>250</td>
      </tr>
      <tr>
        <td>5</td>
        <td className={styles.Player}>Andrew Cortes</td>
        <td>200</td>
      </tr>
      <tr>
        <td>6</td>
        <td className={styles.Player}>Chris Johnson</td>
        <td>150</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default table;