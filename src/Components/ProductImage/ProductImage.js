import React from 'react';
import classes from './ProductImage.module.css';

const ProductImage = (props) => {
  const isActive = props.pos === props.currentPos;

  return (
        <img className={[classes.ProductImage, isActive ? classes.ActiveImage : null].join(" ")} src={props.imgUrl} alt="Product" onClick={() => props.imgClick(props.pos)}/>
      ) 
}

export default ProductImage;