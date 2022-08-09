import React from 'react'
import './Pages.css'
import EditRecipe from '../components/CRUD/EditRecipe'
import NewRecipe from '../components/CRUD/NewRecipe'
import FavouriteList from '../components/CRUD/FavouriteList'
import FavouriteRecipe from '../components/CRUD/FavouriteRecipe'
import Heading from '../components/CRUD/Heading'

function Favourites() {
  return (
    <div>
      <div className="heading fav">
        <h1>All Time Favourites</h1>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-love-dating-app-flaticons-lineal-color-flat-icons-5.png" width="50px" height ="50px"/>
      </div>
        <Heading />
        <FavouriteList />
    </div>
  )
}

export default Favourites