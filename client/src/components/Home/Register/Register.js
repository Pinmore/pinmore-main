import React, { Component } from 'react';
import styles from './Register.css';
import { Table } from 'react-bootstrap';

class Register extends Component {
  render() {
    return(
      <div className={styles.Register}>
        <div className={styles.Header}>
          <h1 className={styles.HeaderText}>Register</h1>
          <hr/>
        </div>
        <div className={styles.FormContainer}>
          <form className={styles.Form}>
            <p>BASIC INFO</p>
            <input type="text" placeholder="Player Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Mobile Number"/>
            <p className={styles.Score}>SCORE SETTINGS</p>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Course</td>
                  <td>Score</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Course</td>
                  <td>Score</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Course</td>
                  <td>Score</td>
                </tr>
              </tbody>
            </Table>
            <button>JOIN</button>
            <div className={styles.MiniContact}>
              <h3>Mail Us</h3>
              <p>hello@cuesociety.com</p>
            </div>
          </form>
          <div className={styles.Contact}>
            <h2>CONTACT INFO</h2>
            <h3>Mail Us</h3>
            <p>hello@cuesociety.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;