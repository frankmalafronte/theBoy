import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {Links, GolferButton, SponsorButton} from '../components';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'


export default function Donate() {
  const data = useStaticQuery(graphql`
  query {
    golfer: file(relativePath: { eq: "Golfer.jpeg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }`);

  return (
    <div >
      <Links/>
      <div style={{padding:'10px',display:'flex', justifyContent:'center'}}>
        <div style ={{display:'flex', justifyContent:'center',flex:'50%'}}>Individual Golfer</div>
        <div style ={{display:'flex', justifyContent:'center',flex:'50%'}}>Sponsor (different photo here)</div>
      </div>
    <div style ={{display:'flex'}} id ="top level">
        <Link to ='https://checkout.square.site/merchant/ML7FRYEVBTA75/checkout/GC6G7LPB6U5PGIN7TFCU7ZVX' style={{flex:'50%'}}>
        <Img fluid = {data.golfer.childImageSharp.fluid} />
        </Link>  
        <Link to ='/sponsor' style={{flex:'50%'}}>
        <Img fluid = {data.golfer.childImageSharp.fluid} />
        </Link>  
        </div>   
        </div>
  );
}


