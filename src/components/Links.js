import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';
import Logo from '../content/images/TBFinal.jpg'

export default function Links({children}) {
  return (
    <div>
      <div id= "header" className={styles.nav} >
      <div id ="logo" style={{width:'30%'}}>
      <img src ={Logo} style={{width:'250px', height:'100%'}}/>
      </div>
      <div id="Information" style={{width:'30%'}}>
      {/* <div style={{fontSize:'30px', paddingTop:'10px', paddingBottom:'10px'}}>
        August 9th, 2021, at
      </div>
      <div style={{fontSize:'30px'}}>
        Racebrook Country Club
      </div> */}
      </div>
      <div id = "links" style={{ display:'flex',width:'30%',justifyContent:'flex-end'}}>
         <Link to ="/"><button className={styles.navLink}>Home</button></Link>
         <Link to ="/chip"><button className={styles.navLink}>Chip's Story</button></Link>
        <Link to ="https://tournamentfortheboy.square.site"><button style={{ color:'white',backgroundColor:'green', border:'none', borderRadius: '8px'}} className={styles.navLink}>Participate</button> </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>);
}
