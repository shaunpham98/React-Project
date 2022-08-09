import React from 'react'
import { Link } from 'react-router-dom'

function EditRecipe() {
  return (
    <div className="component-id">
    <form>
      <label>Recipe</label>
      <input type="text" placeholder="Enter Recipe"></input>
    </form>
    <button type="submit">Edit</button>
    <Link to="/favourites">Cancel</Link>
  </div>
  )
}

export default EditRecipe