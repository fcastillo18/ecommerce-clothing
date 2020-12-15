import React, { Component } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js'
import './shop.styles.scss'

export class ShopPage extends Component {
  constructor(){
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage
