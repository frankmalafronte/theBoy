import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import Footer from '../components/Footer'
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Hearst from '../content/images/hearst.jpg'
import BackgroundImage from 'gatsby-background-image'



export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    chipJP1: file(relativePath: { eq: "chipJP1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:NORTH ) {
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
        <div style ={{color:'white', fontSize:'50px',position:'absolute', bottom:'75px', right:'5px'}}> Remember the Man</div>
        <div style ={{color:'white', fontSize:'50px',position:'absolute', bottom:'5px', right:'5px'}}> Support The Boy</div>
        </BackgroundImage>
        </div>
        {/* <div style={{backgroundColor:"green"}}>
      <div div className={styles.heroTop}>
         Chip Malafronte Memorial Golf Tournament For The Boy
         </div>
         <div className={styles.heroBottom}>
          August 9th, 2021
        </div>
        </div> */}
        <Footer/>
      </body>
  );
}
