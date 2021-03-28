import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


class SponsorButton extends Component {
constructor(props){
  super(props)
  this.handleGolfer = this.handleGolfer.bind(this)
}

  handleGolfer(){
    // window.location.href ='https://checkout.square.site/merchant/ML7FRYEVBTA75/checkout/GC6G7LPB6U5PGIN7TFCU7ZVX'
  }

  render(){
  return (
    <div>
        <div className = {styles.separateButton}>
          Individual Golfer
        </div>
        </div>   
  );
}
}

export default SponsorButton