import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Chip() {
  return (
    <div>
      <Links/>
     <div>hello</div>
      <Link/>
    </div>
  );
}
