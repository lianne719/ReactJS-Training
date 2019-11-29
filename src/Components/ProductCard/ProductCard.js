import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../Config/RouteEndpoints';

import classes from './ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={classes.Product} key={props.data}>
          <Link to={Routes.PRODUCT_DETAILS+props.data.id}>
          <img className={classes.ProductImage} src={props.data.preview} alt={props.data.name}></img>
          </Link>
          <h3 className={classes.ProductText}>{props.data.name}</h3>
          <p className={classes.ProductText}>{props.data.brand}</p>
          <p className={classes.ProductText}>SGD {(props.data.price * 0.019).toFixed(2)}</p>
        </div>
      ) 
}

export default ProductCard;