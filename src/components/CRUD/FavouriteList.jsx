import React, { useContext } from 'react'
import { GlobalContext } from '/home/shaunpham/MyProjects/Phase_2/academyxi_final/src/context/GlobalState'
import { Link } from 'react-router-dom'


function FavouriteList() {
  const { recipes, removeRecipe } = useContext(GlobalContext);

  return (
    <div>
      {recipes.map(recipe => (
      <div>
      <h3>{recipe.recipe}</h3>
    <div>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <button onClick={() => removeRecipe(recipe.id)}>Delete</button>
    </div>
    </div>
      ))};
    </div>
  )
}

export default FavouriteList