import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links'
import Footer from '../components/Footer'
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Hearst from '../content/images/hearst.jpg'
import BackgroundImage from 'gatsby-background-image'



export default function Home(props) {
  function goToRaceBrook(){
    window.location.href="https://goo.gl/maps/wSGQnCCgizPUEav47"
  }
  const data = useStaticQuery(graphql`
  query {
    chipJP1: file(relativePath: { eq: "chipJP1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:NORTH ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      racebrook: file(relativePath: { eq: "Racebrook.jpeg" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER ) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
    }`);

  return (
    <body>
      <Links/>
      <div className={styles.content}>
        <BackgroundImage style ={{width:'100%', height:'80vh'}}fluid = {data.chipJP1.childImageSharp.fluid}>
        <div className={styles.heroTop}> Remember the Man<br/> Support The Boy</div>
        </BackgroundImage>
        </div>
        <div className ={styles.event}>
        <div id="racebrookPic" style ={{width:'50%'}}>
        <Img style ={{width:'100%', height:'80vh'}}fluid = {data.racebrook.childImageSharp.fluid}/>
        </div>
      <div id="allEventDetails" className ={styles.eventDetails}>
      <div className={styles.detail} style={{ paddingTop:'10px', paddingBottom:'50px', fontWeight:'900', fontSize:'40px'}} >
         Chip Malafronte Memorial Golf Tournament For The Boy
         </div>
         <div   id ={styles.racebook} onClick={goToRaceBrook} className={styles.racebrookButton}>
          Racebrook Country Club
        </div>
         <div className={styles.detail}  >
          August 9th, 2021
        </div>
        <div className={styles.detail}  >
        Registration: 10:30 a.m, Start: 12 p.m  
        </div>
        </div>
        </div>
        <Footer/>
      </body>
  );
}
