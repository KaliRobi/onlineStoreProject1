import React from 'react';

//take a any component and modifies it someway and retruns it
import {useNavigate} from 'react-router';
import './menu-item.styles.scss';

function MenuItem  ({ title, imageUrl, size, linkURL }) {
    const nav = useNavigate();
    function GoToUrl(  ){
      nav(linkURL)
    }

  return(
  
  <div className={`${size} menu-item`} onClick={GoToUrl} >
    <div      
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)};

export default MenuItem;
// we need to arrange this in the scss file

