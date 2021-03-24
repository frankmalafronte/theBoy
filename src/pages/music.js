import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import Gallery from '../components/Gallery';
import {getEngagement} from '../hooks/engagement';


export default function Music() {
  return (


    <div>
      <title>Becca + Frank</title>
      <Links>

        <div c id ="header" className ={styles.heroBottom} style={{paddingTop: '50px'}}>Our Music</div>
        <h2 className={styles.h2a}>Sung by Becca’s mother, Nancy Appleby Brenner</h2>

        <div className={styles.weddingPartyContainer} id ="top level" >

          <div id="Movie 1" className={styles.weddingPartyColumn}>
            <div id ="The Prayer" className={styles.weddingParty}>
              <div>
                <div><iframe width="100%" height="350" src="https://www.youtube.com/embed/_SOukx2yMJ4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe></div>
                <h2><em>The Prayer</em></h2>
                <p>This was the piece we shared for the Zoom wedding. Nancy chose this solo rendition of ‘The Prayer’ for its uplifting message of hope and love, and for its lyrics in both English and Italian, to honor Frank‘s family.</p>
              </div>
            </div>
          </div>

          <div id="Her Story" className={styles.weddingPartyColumn}>
            <div id ="nyeBecca" className={styles.weddingParty}>
              <div>
                <div><iframe width="100%" height="350" src="https://www.youtube.com/embed/jP1yko1uoXk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe></div>
                <h2>On Eagle’s Wings</h2>
                <p>While we didn‘t include this in the Zoom service, we still wanted to share this recording with our loved ones. It serves as a benediction and a blessing of peace during a turbulant time.</p>
              </div>
            </div>
          </div>

        </div>
      </Links>
    </div>
  );
}


