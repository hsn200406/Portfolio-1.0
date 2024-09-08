import React from 'react';
import '../App.css';

const Home = () => {
    return (
      <>
        <div className="top-section">
          <div className='container'>
            <div className="black-box">
              Welcome To My Portfolio!
            </div>
          </div>
        </div>
        <div className="introduction-section">
          <div className="introduction-container">
            <div className='introduction-box'>
              <h1>INTRODUCTION</h1>
            </div>
            <div className='parallelogram-box'>
              <p className='introduction-passage'>
                Thank you very much for checking out my website! It is a pleasure welcoming you to
                check out my portfolio. My name is Hassan ElGhayaty and I am an Undergraduate student
                at the University of British Columbia studying <span className='highlight'>Manufacturing Engineering.</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;
