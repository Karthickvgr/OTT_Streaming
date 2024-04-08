import React from 'react'
import './Footer.css'
import PlayStore from '../../images/Play Store.png'
import AppStore from '../../images/App Store.png'
import Insta from '../../images/Insta.png'
import Twitter from '../../images/Twitter.png'
import Youtube from '../../images/Youtube.png'

const Footer = () => {
  return (
    <div  className='footer'>
        <div className='footer-container'>
           <div className='footer-content'>
                <h1 className='footer-title'>Downlode our mobile app</h1>
                <p className='footer-para'>Your app is your tool for better solution with your followers, making it easier for them to keep up to date.</p>
            </div>
            <span className='footer-batch'>
                <p>Available on</p>
                <img src={AppStore} alt="" />
                <img src={PlayStore} alt="" />
            </span>
        </div>
        <div className='footer-details'>
                <div className='footer-details2'>
                   <h1 className='footer-head'>LOGO</h1>
                   <p className='footer-para2'>123 Film Street Cinematown, 12345 Media Island, Indonesia</p>
                </div>
                <div className='social'>
                 <img src={Insta} alt="" className='insta'/>
                 <img src={Twitter} alt="" className='twitter'/>
                 <img src={Youtube} alt="" className='youtube'/>
               </div>
               <div className='details-para'>
                <a href="#" className='head1'>General</a>
                <a href="#" className='head2'>About Us</a>
                <a href="#" className='head3'>Privacy Policy</a>
                <a href="#" className='head4'>Terms & Condition</a>
                <a href="#" className='head5'>Career</a>
            </div>
            <div className='details-para2'>
                <a href="#" className='head6'>Support</a>
                <a href="#" className='head7'>Help</a>
                <a href="#" className='head8'>FAQ</a>
                <a href="#" className='head9'>Contact Us</a>
                <a href="#" className='head10'>Customer Service</a>
            </div>
            <div className='details-para3'>
                <a href="#" className='head11'>Others</a>
                <a href="#" className='head12'>Media Center</a>
                <a href="#" className='head13'>Partners</a>
                <a href="#" className='head14'>Pers</a>
                <a href="#" className='head15'>Office</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
