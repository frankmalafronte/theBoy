import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Landing() {
  return (
    <div>
      <title>Becca + Frank</title>
      <Links/>
      <div className={styles.title}>Registry </div>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div className ={styles.faq}>
          <div style ={{display: 'flex', justifyContent: 'center'}} ><h3>
            chip
          </h3></div>
        </div>
      </div>
      <Link/>
    </div>
  );
}
