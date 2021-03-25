import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Landing() {
  return (
    <div>
      <title>Becca + Frank</title>
      <Links/>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div style={{overflow: 'auto'}}>
          <p style={{
            fontFamily: 'SQ Market',
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: '500'}}
          >Tournament for The Boy</p>
          <a target="_blank" href="https://checkout.square.site/merchant/ML7FRYEVBTA75/checkout/VDPX6YDABYBDCUNCWGXEUVGS?src=embed" style={{
            display: 'inline-block',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '48px',
            height: '48px',
            color: '#ffffff',
            minWidth: '165p',
            backgroundColor: '#000000',
            borderRadius: '4px',
            textAlign: 'center',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1) inset',
          }}>Donate</a>
        </div>
      </div>
      <Link/>
    </div>
  );
}
