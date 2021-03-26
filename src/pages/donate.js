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
  this.handleSponsor = this.handleSponsor.bind(this)
  this.goBack= this.goBack.bind(this)
  this.state = {life:1}
}

  handleGolfer(){
    this.setState({life:2})
  }

  handleSponsor(){
    this.setState({life:3})
  }
  goBack(){
    this.setState({life:this.state.life = 1})
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
        <div className ={styles.button} onClick={this.handleSponsor} style ={{backgroundColor:'blue'}}>Sponsor </div>
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
if(this.state.life === 3){
  return (
    <div>
    <Links/>
    <div onClick={this.goBack}>go back</div>
    <div>Sponsor</div>
    </div>
  )
}
}
}

export default Donate