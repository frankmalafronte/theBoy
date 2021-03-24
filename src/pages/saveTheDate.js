import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function SaveTheDate() {
  return (
    <div>
      <Links>
      </Links>
      <title>Becca + Frank</title>
      <div className={styles.center}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxGSO-pb8Q74_gYRAcPH9u3VXa3IPm_ouw9z_gxWXcTWfIRg/viewform?embedded=true" width="640" height="1520" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
    </div>
  );
}
