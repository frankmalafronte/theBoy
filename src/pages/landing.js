import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Landing() {
  const data = useStaticQuery(graphql`
  query {
    old: file(relativePath: { eq: "Sponsor1B.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:FILL) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }`);

  return (
    <div>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div className ={styles.faq}>
          <Img fluid = {data.old.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
}
