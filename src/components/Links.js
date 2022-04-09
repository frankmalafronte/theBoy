import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';
import LogoM from '../content/images/TBFinal22.jpg';

export default function Links({children}) {
  return (
    <div>
      <div id= "header" className={styles.nav} >
        <div id= "header-left" className ={styles.headerLeft}>
        <img src ={LogoM} className ={styles.logo}/>
        </div>
          <div  className ={styles.desktopNavWrapper}>
            <div id = "header-center" className ={styles.navLinks}>
              <Link to ="/"><button className={styles.navLink}>Home</button></Link>
              <Link to ="/chip"><button className={styles.navLink}>Chip's Story</button></Link>
              <Link to ="/theBoy"><button className={styles.navLink}>About the Boy</button></Link>
              <Link to ="/TFTB2021"><button className={styles.navLink}>2021</button></Link>
            </div>
            <div id= "header-right" className ={styles.headerReft}>
              <Link to ="https://tournamentfortheboy.square.site"><button className={styles.navButton}>Participate</button> </Link>
            </div>
          </div>
      </div>

      <div>
            {children}
      </div>
    </div>);
}
