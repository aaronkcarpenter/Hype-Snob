import './SearchImages.css';
import React from 'react';

const SearchImages = (props) => {

  const images = props.images.map((image) => {
    return <img key={image.id} alt={image.name} src={image.media.smallImageUrl} />
  });

  const colorway = props.images.map((image) => {
    return <p src={image.colorway}>{image.colorway}</p>
  })

  return (
    <div className='search__images'>
      {images}
      {colorway}
    </div>
  )
}

export default SearchImages;
