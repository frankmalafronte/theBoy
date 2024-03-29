import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Footer from '../components/Footer'



export default function Chip() {
  const data = useStaticQuery(graphql`
  query {
    frisbee: file(relativePath: { eq: "chipFrisbee.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:COVER cropFocus:NORTH ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      pitching: file(relativePath: { eq: "pitching.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:600 fit:COVER cropFocus:NORTH ) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        yankeeGame: file(relativePath: { eq: "yankeeGame.jpg" }) {
          childImageSharp {
            fluid(maxWidth:800 maxHeight:1000 fit:COVER cropFocus:CENTER ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          nationals: file(relativePath: { eq: "nationals.jpeg" }) {
            childImageSharp {
              fluid(maxWidth:1000 maxHeight:600 fit:COVER cropFocus:CENTER ) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            tampa: file(relativePath: { eq: "tampa.jpeg" }) {
              childImageSharp {
                fluid(maxWidth:900 maxHeight:700 fit:COVER cropFocus:CENTER ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
  
    }`);



  return (
    <body>
      <Links/>
      <div className={styles.title}>Chip's Story</div> 

      <div id ="bio" className={styles.weddingParty}>
          <div className={styles.centerWrapper}>
            <div className={styles.center} style={{paddingBottom:'20px'}}  ><Img className={styles.centerPic} fluid = {data.pitching.childImageSharp.fluid} /></div>
            <p >Chip Malafronte was a long-time sports writer for the New Haven Register. He received several awards throughout his career for his exceptional talent in the field, most notably with The Society of Professional Journalists. Chip is best known for his editorial column entitled "Sunday Gravy", combining his excellence in reporting with his sharp wit. His readers looked forward to the personal anecdotes Chip tenderly wove into his weekly articles, many of which featured his young son, John Paul, aka “The Boy”.
           <br/><br/>A lifelong resident of Orange, Chip was a well-rounded athlete, sports enthusiast and a standout at Amity High School in basketball and baseball. His true passion was baseball which began in Orange Little League and he pursued well into his 30s with the West Haven Twilight League, where he was a Gold Bat recipient in 2007. 
           <br/><br/>In addition to his love of sports, Chip was an avid chronicler who took a particular interest in the history of the U.S. Presidents; he visited Mount Rushmore in 2016. Chip was a big fan of music, especially classic rock, and had a special affinity for Van Halen’s album <i>5150</i>. 
            <div className={styles.center} style={{paddingBottom:'0'}} ><Img style ={{ height:'118vh'}} className={styles.centerPic} fluid = {data.yankeeGame.childImageSharp.fluid} /></div>
            <br/>Chip is the proud father of John Paul Mala fronte, with whom he enjoyed touring National monuments and baseball stadiums across the country. Chip encouraged and coached JP in both baseball and basketball, on the field and at home. The two loved statistics and trivia, playing card games such as cribbage, spending time with family, and hanging out with their beloved dog, Bryce. John Paul continues to play sports and maintains a high academic standing in school. JP is currently attending Notre Dame High School in West Haven. 
            <br/><br/>Good friends were important to Chip and he valued the longtime buddies with whom he grew up. From pick-up games on a Saturday afternoon to just hanging out, these guys shared many laughs together. 
            <div className={styles.center}  ><Img className={styles.centerPic} fluid = {data.tampa.childImageSharp.fluid} /></div>
            <br/>Chip was a devoted son, brother, cousin, uncle, colleague, and friend. His tenacity, resolve, and faith in God were inspirational as he courageously defied the odds in his two-year battle with cancer. Chip leaves behind a legacy of good humor, quiet strength, and genuine kindness to all. 
            <br/><br/>This tournament is dedicated to Chip’s memory and is a celebration of his life. All proceeds from today’s event will benefit the education and the future of “The Boy.”</p>
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.nationals.childImageSharp.fluid} /></div>
         </div>
      </div>
     <Footer/>
    </body>
  );
}
