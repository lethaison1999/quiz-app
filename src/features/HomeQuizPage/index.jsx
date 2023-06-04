import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './styles.scss';

function HomeQuizPage() {
  return (
    <div className="wrap-home">
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <Link to="/question">
          <button className="btn-start">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeQuizPage;
