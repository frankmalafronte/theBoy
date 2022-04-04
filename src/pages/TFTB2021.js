import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import Gallery from '../components/Gallery';
import {get2021} from '../hooks/2021';
import styles from '../components/styles.module.css';


export default function TFTB2021() {
  const data = get2021();
  const array = Object.values(data);

  return (
    <div>
    <title>2021</title>
    <Links>
    <div className={styles.centerWrapper}>
    <div className={styles.center} >
    <p>
    On August 9, 2021, we held the First Annual Chip Malafronte Memorial Golf Tournament for The Boy, and it was a huge success! It seemed half the town of Orange showed up not only to play in the tournament, but to partake in the memories and joy of the day.
    <br/><br/>So many of our former Amity classmates, friends, neighbors, and family showed up to share laughter, food, and libations, while helping us raise money for the education and future of Chip’s son, John Paul Malafonte. (aka “The Boy”)
    <br/><br/>Thanks to the generous donations we received from so many, we raised almost $50,000 for The Boy in our first year! We couldn’t have done that without all of you; we are truly grateful. 
    <br/><br/>We owe a special debt of gratitude to Hearst Ct. Media Group, who not only agreed to be the tournament’s presenting sponsor last year, but has graciously offered to do so for a second year in a row. This company has done nothing but prove their love and dedication to our family, to JP, and to Chip’s memory. We couldn’t be more appreciative. 
    <br/><br/>We hope to see you all again this year!
    <br/><br/>
    </p>
    </div>
    </div>
      <Gallery photos = {data} array ={array}/>
    </Links>
    </div>
  );
}
