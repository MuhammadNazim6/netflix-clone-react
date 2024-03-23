import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className='footer-div p-4'>
      <div className='footer-col col-md-2 m-5'>
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Ways to watch </p>
        <p>Corporate Information</p>
        <p>Netlfix orginals</p>
        <p>&nbsp;</p>
      </div>
      <div className='footer-col col-md-3 m-5'>
        <p>Help center</p>
        <p>Jobs</p>
        <p>Terms of use</p>
        <p>Contact us</p>
      </div>
      <div className='footer-col col-md-3 m-5'>
        <p>Account</p>
        <p>Redeem Gift Cards</p>
        <p>Privacy </p>
        <p>Speed test</p>
      </div>
      <div className='footer-col col-md-2 m-5'>
        <p>Media center</p>
        <p>Buy gift cards</p>
        <p>Cookie preferences </p>
        <p>Legal Notices</p>
      </div>

    </footer>
  )
}

export default Footer