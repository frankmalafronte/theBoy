import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';
import LogoM from '../content/images/TBFinal.jpg';
import LogoD from '../content/images/TBFinal_horizontal.jpg'

export default function Links({children}) {
  return (
    <div>
      <div id= "header" className={styles.nav} >
        <div id ="header-left" style={{width:'40%'}}>
        <img src ={LogoM} style={{width:'220px', height:'100%'}}/>
        </div>
     
     {/*<div id="header-center" style={{width:'20%'}}>
        <div style={{fontSize:'30px', paddingTop:'10px', paddingBottom:'10px'}}>
          August 9th, 2021, at
        </div>
        <div style={{fontSize:'30px'}}>
          Racebrook Country Club
        </div>
        </div> */}
        
        <div id = "header-right" style={{ display:'flex',width:'50%',justifyContent:'flex-end'}}>
          <Link to ="/"><button className={styles.navLink}>Home</button></Link>
          <Link to ="/chip"><button className={styles.navLink}>Chip's Story</button></Link>
          <Link to ="https://tournamentfortheboy.square.site"><button className={styles.navButton}>Participate</button> </Link>
          </div>
      </div>

      <div>
            {children}
      </div>
    </div>);
}
