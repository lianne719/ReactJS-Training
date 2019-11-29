import React from 'react';
import classes from './HomePage.module.css';

import {getProductList} from '../../Services/ProductApiService';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProgressLoader from '../../Components/ProgressLoader/ProgressLoader';

class HomePage extends React.Component {
  state = {
    showClothingList: true,
    showAccessoriesList: true,
    showLoader: true,
    productList: []
  }

  retrieveProducts = () => {    
    getProductList()
    .then(response => {
      this.setState({
        showLoader: false,
        productList: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    return this.retrieveProducts()
  }

  productsPretty = (products) => {
    return (products.map((item, pos) => <ProductCard data={item} key={pos}/>));
  }

  toggleVisibility = (type) => {
    switch (type) {
      case 'clothing':
          this.setState((prevState, prevProps) => {
            return {
              showClothingList: !prevState.showClothingList
            }
          });
          break;
      case 'accessories':
          this.setState((prevState, prevProps) => {
            return {
              showAccessoriesList: !prevState.showAccessoriesList
            }
          });
          break;
      default:
        return null;
    }
    
  }

  render() {
    const accessories = this.state.showLoader ? [] : this.state.productList.filter(item => item.isAccessory);
    const clothing = this.state.showLoader ? [] : this.state.productList.filter(item => !item.isAccessory);
    
    return (
      <div className={classes.Content}>
          <ProgressLoader isLoading={this.state.showLoader} > 
              <section>
              <h2>Clothing for Men and Women</h2>
              <button onClick={() => this.toggleVisibility("clothing")}>{
                this.state.showClothingList ? "Collapse" : "Expand"
              }</button>
              {
                this.state.showClothingList ? <div className={classes.Catalogue}>{this.productsPretty(clothing)}</div> : null
              } 
            </section>
            <section>
              <h2>Accessories for Men and Women</h2>
              <button onClick={() => this.toggleVisibility("accessories")}>{
                this.state.showAccessoriesList ? "Collapse" : "Expand"
              }</button>
              {
                this.state.showAccessoriesList ? <div className={classes.Catalogue}>{this.productsPretty(accessories)}</div> : null
              } 
            </section>
          </ProgressLoader>
      </div>
    );
  }
}

export default HomePage;
