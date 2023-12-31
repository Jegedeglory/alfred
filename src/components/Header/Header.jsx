import React from 'react'
import Navbar from '../Navbar/Navbar';
// import Body from '../Body/Body';
import "./Header.css";
import { FaPaperPlane } from 'react-icons/fa';

const Header = () => (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      { <div className='container'>
        <div className='header-content text-center flex flex-column'>
         <h1 className='text-uppercase header-title'>Start free & <br />pay-as-you-go</h1>
        </div>
        <div className='grid-divider'>
        <div className='divider'>
          <h2 className='main-phrase'>Starter</h2>
          <h2 className='money-phrase'>$9 + $0.15</h2>
          <p className='AI-phrase'>per AI generation</p>
          <button className='butn'>Sign up & enable AI</button>
          <div className='paragraph'>
            <p className='included'>What's included:</p>
          <p>AI text generation for answers</p>
          <p>AI audio generation for answers</p>
          <p>1000 contacts</p>
          <p>25 Notes</p>
          <p>50 Questions</p>
          </div>
        </div>
        <div className='divider'>
          <div className='trapezoid'><p className='best'>Best Value</p></div>
        <h2 className='main-phrase'>Growth</h2>
          <h2 className='money-phrase'>$36 + $0.09</h2>
          <p className='AI-phrase'>per AI generation</p>
          <button className='butn second-btn'>Sign up & enable AI</button>
          <div className='paragraph'>
            <p className='included'>What's included:</p>
          <p>AI text generation for answers</p>
          <p>AI audio generation for answers</p>
          <p>1000 contacts</p>
          <p>25 Notes</p>
          <p>50 Questions</p>
          </div>
        </div>
        </div>
      </div> }
    </header>
)
export default Header
