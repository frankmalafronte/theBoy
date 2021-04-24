import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';
import Logo from '../content/images/TBFinal.jpg'

export default function Links({children}) {
  return (
    <div>
      <div id= "header" className={styles.nav} >
<<<<<<< HEAD
        <div id ="header-left" style={{width:'40%'}}>
        <img src ={Logo} style={{width:'220px', height:'100%'}}/>
=======
      <div id ="logo" style={{width:'30%'}}>
      <img src ={Logo} style={{width:'250px', height:'100%'}}/>
      </div>
      <div id="Blank Space" style={{width:'30%'}}>
      </div>
      <div id = "links" style={{ display:'flex',width:'30%',justifyContent:'flex-end'}}>
         <Link to ="/"><button className={styles.navLink}>Home</button></Link>
         <Link to ="/chip"><button className={styles.navLink}>Chip's Story</button></Link>
        <Link to ="https://tournamentfortheboy.square.site"><button style={{ color:'white',backgroundColor:'green', border:'none', borderRadius: '8px'}} className={styles.navLink}>Participate</button> </Link>
>>>>>>> f6f74f65dc065db04a81bda5624306f7c40d3802
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
          <Link to ="https://tournamentfortheboy.square.site"><button style={{ color:'white',backgroundColor:'green', border:'none', borderRadius: '8px'}} className={styles.navLink}>Participate</button> </Link>
          </div>
      </div>

      <div>
            {children}
      </div>
    </div>);
}
