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
          fluid(maxWidth:2000 maxHeight:800 fit:COVER cropFocus:CENTER ) {
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
        <div className ={styles.eventContainer}>
        <div id="racebrookPic" className={styles.racebrookPic}>
        <BackgroundImage style ={{width:'100%', height:'80vh'}}fluid = {data.racebrook.childImageSharp.fluid}>
        </BackgroundImage>
        </div>
        <div id="allEventDetails" className ={styles.eventDetails}>
      <div className={styles.eventTitle} >
         1st Annual Chip Malafronte <br/> Memorial Golf Tournament 
         </div>
         <div  onClick={goToRaceBrook} className={styles.racebrookButton}>
          Racebrook Country Club
        </div>
         <div className={styles.detail}  >
          August 9, 2021
        </div>
        <div className={styles.subDetail} >
        <br/><br/>
        Registration: 10:30 a.m. <br/>Shotgun Start: 12 p.m.
        <br/><br/>
        Cookout Buffet Lunch: 11 a.m <br/>
        Cocktails: 5-7 p.m <br/>
        Buffet Dinner: 7 p.m
        <br/> 
       <br/> Dress Code: Golf Attire or Business Casual
        </div>
        </div>
        </div>
        <Footer/>
      </body>
  );
}
