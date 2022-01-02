import { render } from '@testing-library/react';
import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collecion/preview.component';


class ShopPage extends React.Component{
constructor(props) {
super(props)

this.state = {
    collections : SHOP_DATA

}
}
//collections = this.state.collections 
render(){
    const {collections} = this.state;  //deconst of the collections
    return (
        <div className='shop-page'>
            { 
           collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
            }


        </div>
        
    )
}

}

export default ShopPage;