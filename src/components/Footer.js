import React from 'react'
import {useStaticQuery, graphql,Link} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Hearst from '../content/images/hearst.jpg'



export default function Footer (){
    return (
      <div className ={styles.sponsorsContainer}>
      <Link  to="https://www.hearst.com/newspapers/hearst-connecticut-media-group"> <img className ={styles.sponsors} src ={Hearst} /></Link>
      </div>
    )
  }

