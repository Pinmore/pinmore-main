import React, { Component } from 'react';
import Header from './Header/Header';
import Leaderboard from './Leaderboard/Leaderboard';
import Rules from './Rules/Rules';
import Register from './Register/Register';
import Footer from './Footer/Footer';

class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Leaderboard />
        <Rules />
        <Register />
        <Footer />
      </div>
    )
  }
}

export default Home;