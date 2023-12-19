import React from 'react'
import './SearchBar.css'

function SearchBar() {
  const handleSearch = () => {
    window.location.href = '/products';
  }
  return (
    <div className='container'>
        <div className = 'innerContainer'>
    <input
         type="text"
         placeholder="Search..."
         style={{ height: '50px' , width: '250px' }}
         />
         <button style={{height: '50px' , width: '150px',backgroundColor:'black', color:'white'}} onClick={handleSearch} >SEARCH</button>
         </div>
         </div>
  )
}

export default SearchBar