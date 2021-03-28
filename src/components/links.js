import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';

export default function Links({children}) {
  return (
    <header className="app-wrapper">
      <div className={styles.nav} >

        <div className={styles.dropDown} >
          <Link to ="/"><button className={styles.navLink}>Landing</button></Link>
          <div className ={styles.dropDownContent} id="dropDownContainer">
            {/* <Link to = "/details">Special Details</Link> */}
          </div>
        </div>
        <Link to ="/chip"><button className={styles.navLink}>Chip</button></Link>
        <Link to ="https://checkout.square.site/merchant/ML7FRYEVBTA75/checkout/VDPX6YDABYBDCUNCWGXEUVGS"><button className={styles.navLink}>Donate</button> </Link>
        <Link to ="/donate"><button className={styles.navLink}>Participate</button></Link>
      </div>
      <div>
        {children}
      </div>
    </header>);
}
