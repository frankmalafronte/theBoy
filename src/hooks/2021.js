import {useStaticQuery, graphql} from 'gatsby';

export const get2021 = () =>{
  const data = useStaticQuery(graphql`
  query {
    friends1: file(relativePath: { eq: "2021/friends1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    friends2: file(relativePath: { eq: "2021/friends2.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      friends3: file(relativePath: { eq: "2021/friends3.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        friends4: file(relativePath: { eq: "2021/friends4.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          friends5: file(relativePath: { eq: "2021/friends5.jpg" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            friends6: file(relativePath: { eq: "2021/friends6.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
             sign: file(relativePath: { eq: "2021/friends7.jpg" }) {
              childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              friends8: file(relativePath: { eq: "2021/friends8.jpg" }) {
              childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
                }
                }
             }
               heartsGroup: file(relativePath: { eq: "2021/hearstGroup.jpg" }) {
                childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
              jimLuigi: file(relativePath: { eq: "2021/jimLuigi.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
              johnGaudioso: file(relativePath: { eq: "2021/johnGaudioso.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              JP1: file(relativePath: { eq: "2021/JP1.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              JP2: file(relativePath: { eq: "2021/JP2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              JP22: file(relativePath: { eq: "2021/JP22.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              jpAnthony: file(relativePath: { eq: "2021/jpAnthony.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:SOUTH) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              jpSmith: file(relativePath: { eq: "2021/jpSmith.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              puttJP: file(relativePath: { eq: "2021/puttJP.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              luigi2: file(relativePath: { eq: "2021/luigi2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              marion: file(relativePath: { eq: "2021/marion.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              miaSelfie1: file(relativePath: { eq: "2021/miaSelfie1.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              miaSelfie2: file(relativePath: { eq: "2021/miaSelfie2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              reception1: file(relativePath: { eq: "2021/reception1.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              reception2: file(relativePath: { eq: "2021/reception2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              reception3: file(relativePath: { eq: "2021/reception3.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              sisters: file(relativePath: { eq: "2021/sisters.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              tee: file(relativePath: { eq: "2021/tee.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
    }`);
  return data;
};

