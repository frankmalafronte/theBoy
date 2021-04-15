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
      <div id="blank space" style={{width:'30%'}}></div>
      <div id = "links" style={{ display:'flex', flexDirection:"row",width:'30%',justifyContent:'end'}}>
        <Link to ="/"><button className={styles.navLink}>Landing</button></Link>
        <Link to ="/chip"><button className={styles.navLink}>Chip</button></Link>
        <Link to ="https://tournamentfortheboy.square.site"><button style={{ color:'white',backgroundColor:'green', border:'none', borderRadius: '8px'}} className={styles.navLink}>Participate</button> </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>);
}
