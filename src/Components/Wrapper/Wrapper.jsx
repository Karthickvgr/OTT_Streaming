import React from 'react'
import './Wrapper.css'
import logo2 from '../../images/Logo.png'
import star from '../../images/Vector.png'
import Divider1 from '../../images/Divider.png'
import Divider2 from '../../images/Divider2.png'
/* import Play from '../../images/play-line.png' */
import Ellipse from '../../images/Ellipse.png'
import Ellipse1 from '../../images/Ellipse1.png'
import Ellipse2 from '../../images/Ellipse2.png'
import Ellipse3 from '../../images/Ellipse3.png'
import Ellipse4 from '../../images/Ellipse4.png'
import Ellipse5 from '../../images/Ellipse5.png'

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <div className='content'>
            <div className='logo2'>
               <img src={logo2} alt="" />
            </div>
            <div className='star'>
               <img src={star} alt="" />
               <p className='rateing'>9.2</p>
               <img src={Divider1} className='divider1' alt="" />
               <p className='tv'>TV-MA</p>
               <img src={Divider2} className='divider2' alt="" />
               <h6 className='year'>2020</h6>
            </div>
            <div className='categories'>
                <button className='btn-comedy' type='button'>Comedy</button>
                <button className='btn-drama' type='button'>Drama</button>
                <button className='btn-sports' type='button'>Sports</button>
            </div>
            <div className='para'>
                <p className='para1'>Ted Lasso, an American college football coach, is unexpectedly recruited to coach a fictional English Premier League soccer team, AFC Richmond.</p>
            </div>
           {/*  <div className='content-btn'>
                <img src={Play} alt="" className='play-icon'/>
                <button type='button' className='play'>Play</button>
            </div> */}
            <div className='btn-container'>
                <button className='btn1'>Play</button>
                <button className='btn2'>See Details</button>
            </div>
      </div>
      <div className='ellipse-icon'>
        <img src={Ellipse} alt="" className='ellipse'/>
        <img src={Ellipse1} alt="" className='ellipse1'/>
        <img src={Ellipse2} alt="" className='ellipse2'/>
        <img src={Ellipse3} alt="" className='ellipse3'/>
        <img src={Ellipse4} alt="" className='ellipse4'/>
        <img src={Ellipse5} alt="" className='ellipse5'/>
      </div>
    </div>
  )
}

export default Wrapper
