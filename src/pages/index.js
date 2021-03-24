import React from 'react';
import {Link} from 'gatsby';
import Landing from './landing';
import Links from '../components/links';
import styles from '../components/styles.module.css';

const IndexPage = () => (
  <div>
    <Links>
      <Landing/>
    </Links>
  </div>
);

export default IndexPage;
