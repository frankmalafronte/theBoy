import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/blah';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Footer from '../components/Footer'



export default function Chip() {
  return (
    <body>
      <Links/>
     <div className={styles.content}>hello</div>
     <Footer/>
    </body>
  );
}
