import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import Footer from '../components/Footer'
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import Hearst from '../content/images/hearst.jpg'



export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    chipJP1: file(relativePath: { eq: "chipJP1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }`);

  return (
    <body>
      <Links/>
      <div className={styles.content}>
      <div>
        Thank you for interest in the innagural Chip Malafronte Memorial Golf Tournament, for the boy... 
        </div>
        <div style={{height:"20%",width:"20%"}}>
        <Img fluid = {data.chipJP1.childImageSharp.fluid}/>
        </div>
        <div>
        Monday, August 9, 2021 
        </div>
        <div>
          Racebrook Country Club 
        </div>
        </div>
        <Footer/>
      </body>
  );
}
