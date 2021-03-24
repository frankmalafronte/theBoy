import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isOpen: false,
      photoIndex: 0,
    };
  }

  gotoPrevLightboxImage() {
    const {photo} = this.state;
    this.setState({photo: photo - 1});
  }

  gotoNextLightboxImage() {
    const {photo} = this.state;
    this.setState({photo: photo + 1});
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({isOpen: true, photoIndex: index});
  }

  closeLightbox() {
    this.setState({lightbox: false});
  }

  render() {
    const {photos, array} = this.props;
    const {photoIndex, isOpen} = this.state;
    return (
      <div>
        <div className={styles.row} style={{cursor: 'pointer'}}>
          {array.map((photo, i)=>{
            return (
              <a className ={styles.column} onClick={(e)=>this.openLightbox(i, e)} >
                <Img fluid ={photo.childImageSharp.fluid}/>
              </a>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={array[photoIndex].childImageSharp.fluid.src}
            nextSrc={array[(photoIndex + 1) % array.length]}
            prevSrc={array[(photoIndex + array.length - 1) % array.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + array.length - 1) % array.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % array.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
