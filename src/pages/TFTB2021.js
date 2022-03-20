import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/Links';
import Gallery from '../components/Gallery';
import {get2021} from '../hooks/2021';


export default function TFTB2021() {
  const data = get2021();
  const array = Object.values(data);

  return (
    <div>
    <title>2021</title>
    <Links>
      <Gallery photos = {data} array ={array}/>
    </Links>
    </div>
  );
}
