import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Photos() {
  return (
    <div>
      <title>The Boy</title>
      <Links/>
      <div className={styles.title}>Registry </div>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div className ={styles.faq}>

          <div><h3>We love receiving mail and especially cards. We’d love to add your card to our collage wall! Our mailing address is:
          </h3><br /><h3 style ={{textAlign: 'center'}}>7 Kensington Lane Unit 201<br />Rocky Hill, CT, 06067</h3></div>
          <br></br>
          <div style ={{display: 'flex', justifyContent: 'center'}} ><h3>
            We are also registered at <a href="https://www.zola.com/registry/beccafrank" target="_blank">Zola.com</a>.
          </h3></div>
        </div>
      </div>
      <Link/>
    </div>
  );
}

