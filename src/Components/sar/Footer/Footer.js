// import React from 'react'
// import './Footer.css'
// function Footer() {
//   return (
//     <div className='Footercontainer'>
//     <div className='colContainer'>
//         <h3>SHOP</h3>
//          <li>ACCESSORIES</li>
//          <li>GARAGE</li>
//          <li>ROUNDHOUSE WHEELS</li>
//          <li>SURFSKATES</li>
//          <li>APPAREL</li>
//          <li>DECKS</li>
//          <li>TRUCKS</li>
//          <li>PARTS</li>

//     </div>
//     <div  className='colContainer'>
//         <h3>INFO</h3>
//          <li>RIDE REVIEWS</li>
//          <li>BOARD SELECTOR</li>
//          <li>ABOUT</li>
//          <li>CONTACT US</li>
        
//     </div>
//     <div  className='colContainer'>
//         <h3>SUPPORT</h3>
//          <li>RETAILERS</li>
//          <li>SHIPPING & ORDERING</li>
//          <li>WARRANTY</li>
//          <li>B2B</li>
//     </div>
//     <div  className='colContainer'>
//         <h3>TEAM</h3>
//          <li>PROS</li>
//          <li>COLLABS</li>
//          <li>SURF ACADEMIES</li>
//     </div>
//     </div>
//   )
// }

// export default Footer





import React from 'react';
import './Footer.css';
import Email from './Email';

function Footer() {
  return (
    <>
   <Email/>
    <div className='Footercontainer' style={{textAlign: 'left', padding : '10px 20px'}}>
      <div className='colContainer'>
        <h3>SHOP</h3>
        <ul >
          <li>ACCESSORIES</li>
          <li>GARAGE</li>
          <li>ROUNDHOUSE WHEELS</li>
          <li>SURFSKATES</li>
          <li>APPAREL</li>
          <li>DECKS</li>
          <li>TRUCKS</li>
          <li>PARTS</li>
        </ul>
      </div>
      <div className='colContainer'>
        <h3>INFO</h3>
        <ul>
          <li>RIDE REVIEWS</li>
          <li>BOARD SELECTOR</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className='colContainer'>
        <h3>SUPPORT</h3>
        <ul>
          <li>RETAILERS</li>
          <li>SHIPPING & ORDERING</li>
          <li>WARRANTY</li>
          <li>B2B</li>
        </ul>
      </div>
      <div className='colContainer'>
        <h3>TEAM</h3>
        <ul>
          <li>PROS</li>
          <li>COLLABS</li>
          <li>SURF ACADEMIES</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Footer;
