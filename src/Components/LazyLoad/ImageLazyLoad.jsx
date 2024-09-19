import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
const ImageLazyLoad=({src,alt})=> {
  return (
  <>
 <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src} />  
  </>
  )
}
ImageLazyLoad.propTypes = {
  src: PropTypes.string.isRequired, // Validate src prop as a required string
  alt: PropTypes.string.isRequired, // Validate alt prop as a required string
};

export default ImageLazyLoad