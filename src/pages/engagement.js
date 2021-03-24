import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import Gallery from '../components/Gallery';
import {getEngagement} from '../hooks/engagement';


export default function Engagement() {
  const data = getEngagement();
  const array = Object.values(data);
  return (
    <div>
      <title>Becca + Frank</title>
      <Links>
        <Gallery photos = {data} array ={array}/>
      </Links>
    </div>
  );
}

