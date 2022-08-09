import React from 'react'
import Recipe from '../components/Recipe'
import './Pages.css'


function Search() {
  return (
    <div>
        <h1 className='heading'>Search for Recipes<span><img src="https://img.icons8.com/stickers/100/000000/search.png" width="50px"/></span></h1>
        <Recipe />
        
    </div>
  )
}

export default Search