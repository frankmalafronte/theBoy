import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Footer from '../components/Footer'



export default function theBoy() {
  const data = useStaticQuery(graphql`
  query {
    wrestling: file(relativePath: { eq: "hammer.jpg" }) {
      childImageSharp {
        fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:CENTER ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      hammer: file(relativePath: { eq: "wrestling.jpg" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:500 fit:COVER cropFocus:CENTER ) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        smiling: file(relativePath: { eq: "2021/JP2.jpg" }) {
          childImageSharp {
            fluid(maxWidth:800 maxHeight:1200 fit:COVER cropFocus:CENTER ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
    }`);



  return (
    <body>
      <Links/>
      <h2>About The Boy</h2> 

      <div id ="bio" className={styles.weddingParty}>
          <div className={styles.centerWrapper}>
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.wrestling.childImageSharp.fluid} /></div>
            <br/>
            <p>John Paul Malafronte, age 14,  started his freshman year at Notre Dame of West Haven in September 2021.  He is off to a great start, riding the train everyday, loving his classes, studying hard, and earning first honors each semester.  The coach of the Notre Dame wrestling team recruited John Paul. Seeing his potential, he suggested that JP attend a practice or two.  In no time The Boy was hooked, landing a spot on both the JV and Varsity teams in his weight class. 
           <br/><br/>Through sheer determination JP persevered throughout the season—practicing intensely, growing stronger, and changing his diet. Even his coaches noticed his dedication, choosing him for the “Hammer Award”, an honor bestowed upon the most improved player. In March, the Green Knights advanced to the Class M State Tournament where John Paul placed 2nd for JV and 9th for Varsity in his weight category of 113 lbs.  
           <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.hammer.childImageSharp.fluid} /></div>
            <br/><br/>John Paul continues to follow his passion for baseball, playing for The Grind baseball team in Milford where he pitched and played the outfield. 
            <br/><br/>This winter, JP began learning to ski in both Connecticut and Vermont, showing a lot of promise. His competitive nature motivates him to try keeping up with his cousin, Smithy. 
            <br/><br/>It’s been quite a year for John Paul. He’s made new friends who share his interests; they’re often seen playing pick-up basketball during lunch, talking football, and hanging out at each other’s houses.  John Paul is excited to be participating in the golf tournament again this year. If you see The Boy out on the course, be sure to say hi! 
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.smiling.childImageSharp.fluid} /></div>
          </p>
         </div>
      </div>
     <Footer/>
    </body>
  );
}
