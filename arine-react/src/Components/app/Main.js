import React from 'react';
import '../../Css/main.css';
//import MainBannerImg from '../../image/main/main_slide2.1d2b2c32.jpg';

function Main() {
    
    const mainDiv = {
        width : '100%'
    }
     
    return (
        
        <div style={mainDiv}>
            <img className="mainImageCss" src='image/main/main_slide2.1d2b2c32.jpg'></img>
        </div>
    );
  }
   
  export default Main;