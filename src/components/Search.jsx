import React from 'react'
import style from "./Search.css"

const Search =({title, calories, image, url, meal}) => {
  return (
    <div className="modules">
        <h2>{title}</h2>
        <p>{calories} Calories</p>
        <img src={image} alt="" width="200px" height="200px"/>
        <p>Meal Type: {meal}</p>
        <a href={url}>Click to View Recipe</a>
    </div>
  )
}

export default Search