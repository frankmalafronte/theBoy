import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Details() {
  const data = useStaticQuery(graphql`
  query {
    old: file(relativePath: { eq: "weddingDay/traditions/oldHankie.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }`);

  return (
    <div>
      <title>Becca + Frank</title>
      <Links>
        <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>Good Luck Traditions & Details</div>
        <div className={styles.weddingPartyContainer} id ="top level" >
          <div id="Traditions Container" className={styles.weddingPartyColumn}>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.old.childImageSharp.fluid} /></div>
                <h2>Something Old</h2>
                <div className ={styles.center}>
                  <div>My Aunt Gail gave me my great-grandmother Rena’s handkerchief. It was perfect, since our given first names both start with the same letter, and I would need it for the tears of joy that came later.</div>
                </div>
              </div>
            </div>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.new.childImageSharp.fluid} /></div>
                <h2>Something New</h2>
                <div className ={styles.center}>
                  <div>I’m not usually a shoe person, but I decided to go all out for this! Frank’s sister Katie and mom Marion went shopping with me the week before the wedding and helped me pick out the heels I wore on the day. On my way to check out, I found the coziest-looking after-wedding shoes that came in our color: rose gold! So I wore both on the big day.</div>
                </div>
              </div>
            </div>
          </div>

          <div id="Traditions Container" className={styles.weddingPartyColumn}>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.borrowed.childImageSharp.fluid} /></div>
                <h2>Something Borrowed</h2>
                <div className ={styles.center}>
                  <div>Frank’s Aunt Susan shared two pieces of jewelry with me. The first was a bracelet she wore at her sister Juliana’s wedding, which sparkled just like my shoes! The second was a necklace belonging to her own Aunt Sue, whom she was named after and who lived to be 101 years old. I was lucky enough to meet her! Two very special pieces.</div>
                </div>
              </div>
            </div>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.blue.childImageSharp.fluid} /></div>
                <h2>Something Blue</h2>
                <div className ={styles.center}>
                  <div>Gail really thought of everything! For my bridal shower, she gave me not one, but TWO garters: one to wear and one to throw. I wore the sparkly garter and am saving the second one for our in-person celebration.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id ="Sixpence"className={styles.weddingParty}>
          <div style={{backgroundColor: 'white'}}>
            <div style={{margin: '20px', paddingBottom: '20px'}}>
              <div className={styles.center}><Img className ={styles.centerPic} fluid = {data.sixpence.childImageSharp.fluid}/></div>
              <h2>Sixpence In Your Shoe</h2>
              <div className ={styles.center}>
                <div>Our dear friend Gail Stevens gave me a 1950 sixpence, which she purchased in an antique shop while in Ireland in 1999. My dad was born in 1950, so the year of sixpence was quite significant.</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.weddingPartyContainer} id ="top level" >
          <div id="Details Container" className={styles.weddingPartyColumn}>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.pen.childImageSharp.fluid} /></div>
                <h2>Special Pen</h2>
                <div className ={styles.center}>
                  <div>Gail’s husband Bryan Stevens hand-carved a beautiful commemorative pen, with which we signed our marriage license to make it official. The pen is made of maple inlay and black titanium, with a Swarovski crystal on the clip.</div>
                </div>
              </div>
            </div>
          </div>

          <div id="Details Container" className={styles.weddingPartyColumn}>
            <div className ={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.cakeTopper.childImageSharp.fluid} /></div>
                <h2>Cake Topper</h2>
                <div className ={styles.center}>
                  <div>My grandmother Joyce Appleby loved clothespins. She would use them all the time to pin notes to herself around her home. I wanted to honor her with the cake topper for our special day, so I hand-painted a clotespin outfitted as Frank and I were for the wedding.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Links>
    </div>
  );
}
