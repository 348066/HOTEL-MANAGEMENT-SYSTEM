import React from 'react'

export const Footer = () => {
  return (
    <footer className=''>
        <h2>Private Resort|Hotel Room Book</h2>
        <p>
            &copy;<span>{new Date().getDay()}</span>privateresort.com-All copyrights reserverd to Resort
        </p>
    </footer>
  )
}

export default Footer;