import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


class Sponsor extends Component {
constructor(props){
  super(props)
  this.handleSponsor = this.handleSponsor.bind(this)
  this.state = {}
}


  handleSponsor(){
    console.log('go to square')
  }
 
  
  render(){
  return (
    <div>
    <Links/>
    <div style = {{backgroundColor:'white' ,display:"flex", flexDirection:"column", width:"100%", height:'100%',position:'fixed'}}>
    <div style={{height:'33%', backgroundColor:'yellow', border:'5px solid black'}}>
      Copy about sponsoring
    </div>
    <div style={{height:'33%', backgroundColor:'orange', border:'5px solid black'}}>
      Copy about prices?
    </div>
    <div onClick={this.handleSponsor} style ={{backgroundColor:'white',border:'5px solid black', height:'33%', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div style={{height:'50%', width:"10%", border:'5px solid black', marginBottom:"5%", backgroundColor:'red'}}>Sponsor</div>
     </div>
        </div>   
        </div>
  );
}
}


export default Sponsor