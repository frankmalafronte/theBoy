import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from './links';
import styles from '../components/styles.module.css';


export default function Accordian({faq, index, toggleFAQ}) {
  return (
    <div className = {styles.faqContainer}>
      <title>Becca + Frank</title>
      <div className={styles.faq}>
        <div className ={ styles.faqQuestion}
          key={index}
          onClick={()=>toggleFAQ(index)}>
          {faq.question}
        </div>
        <div className={ (faq.open ? styles.faqOpen : styles.faqClosed)}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
