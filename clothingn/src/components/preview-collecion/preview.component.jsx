import React from 'react';
import CollectionItem from '../collectin-item/collection-item.component';
import './preview.stlye.scss'

// this is the functional component

const CollectionPreview= ({title, items}) => (
<div  className='collection-preview'>   
    <h1 className='title' >{title.toUpperCase()}</h1>
    <div className='preview' >   
    {/* // filter out everything with index of 3+  these are getting called every time the component rerenders*/}
        {items.filter((item, idx) => idx < 4 ).map(({id, ...otherItemProps})=> (
                <CollectionItem key={id} {...otherItemProps}/>
            ))
        }
    </div>
    
</div> 
)

export default CollectionPreview

// id: 1,
// title: 'Hats',
// routeName: 'hats',
// items: [

// id: 2,
// name: 'Blue Beanie',
// imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
// price: 18