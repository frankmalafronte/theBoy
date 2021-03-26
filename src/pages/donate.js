import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


class Donate extends Component {
constructor(props){
  super(props)
  this.handleGolfer = this.handleGolfer.bind(this)
  this.state = {life:1}
}

  handleGolfer(){
    window.location.href ='https://checkout.square.site/merchant/ML7FRYEVBTA75/checkout/GC6G7LPB6U5PGIN7TFCU7ZVX'
  }

  render(){
    if(this.state.life===1){
  return (
    <div>
    <Links/>
      <div style = {{ backgroundColor:'yellow' ,display:"flex", width:"100%", height:'100%',position:'fixed'}}>
        <div onClick={this.handleGolfer}className= {styles.button} style ={{backgroundColor:'red'}}>
          Individual Golfer
        </div>
        <div className ={styles.button} style ={{backgroundColor:'blue'}}>
        <Link to ="/sponsor"><button className={styles.navLink}>sponsor</button></Link>
         </div>
        </div>   
        </div>   
  );
}
if(this.state.life === 2){
  return (
    <div>
    <Links/>
    <div onClick={this.goBack}>go back</div>
    <div>Golfer</div>
    </div>
  )
}
}
}

export default Donate