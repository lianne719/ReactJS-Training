import React from 'react';
import Axios from 'axios';
import classes from './ProductDetails.module.css';

import ProductImage from '../../Components/ProductImage/ProductImage';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProgressLoader from '../../Components/ProgressLoader/ProgressLoader';
import {productList} from '../../Utils/ProductData';

class ProductDetails extends React.PureComponent {
  state = {
    selectedImagePos: 0,
    showLoader: true,
    product: {
      name: "",
      brand: "",
      price: "",
      description: "",
      photos: [],
      preview: ""
    }
  }

  productList = productList;

  onImgClick = (pos) => {
    this.setState({selectedImagePos: pos});
  }

  retrieveProductDetails = (productId) => {
    Axios.get('https://5ddf62394a658b0014c4890f.mockapi.io/api/products/'+productId)
    .then(response => {
      console.log(response.data);
      this.setState({
        product: response.data,
        selectedImagePos: 0,
        showLoader: false
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log("Mount");
    const productId = this.props.match.params.productId;
    this.retrieveProductDetails(productId);
  }

  componentDidUpdate() {
    console.log("Update");
    const productId = this.props.match.params.productId;
    if (productId !== this.state.product.id)
      this.retrieveProductDetails(productId);
  }

  render() {
    const productImages = this.state.showLoader ? [] : this.state.product.photos.map((item, pos) => {
      return <ProductImage imgUrl={item} key={pos} currentPos={this.state.selectedImagePos} pos={pos} imgClick={this.onImgClick}/>
    });

    // Shuffle array
    const shuffled = this.productList.sort(() => 0.5 - Math.random());
    const adProducts = shuffled.slice(0, 5).map((item, pos) => <ProductCard data={item} key={pos}/>);
    console.log(adProducts);

    return (
      <div className={classes.Content}>  
      <ProgressLoader isLoading={this.state.showLoader} > 
          <div className={classes.ProductWrapper}>
              <div className={classes.ProductImage}>
                  <div className={classes.ImageWrapper}>
                      <img className={classes.ProductPreview} src={this.state.product.photos[this.state.selectedImagePos]} alt="Preview" />
                      <h4 className={classes.SectionHeading}>Product Preview</h4>
                      <div className={classes.ProductImages}>
                          {productImages}
                      </div>
                  </div>
              </div>
              <div className={classes.ProductDetails}>
                  <h1 className={classes.ProductTitle}>{this.state.product.name}</h1>
                  <h1 className={classes.ProductBrand}>{this.state.product.brand}</h1>
                  <h4 className={classes.SectionHeading}>Price: Rs <p className={classes.ProductPrice}>{this.state.product.price}</p></h4>
                  <h4 className={classes.SectionHeading}>Description</h4>
                  <p className={classes.description}>{this.state.product.description}</p>
                  

                  <button id="btn-add-to-cart">Add to Cart</button>

                  <h5 className={classes.SectionHeading}>Products you may be interested in</h5>
                  <div className={classes.AdSection}>
                    {adProducts}
                  </div>
              </div>
          </div>
        </ProgressLoader>
      </div>
    );
  }
}

export default ProductDetails;
