import React, {useEffect, useState, useContext} from 'react'
import { GlobalContext } from '/home/shaunpham/MyProjects/Phase_2/academyxi_final/src/context/GlobalState'
import { Link, useNavigate } from 'react-router-dom';

function EditRecipe (props) {
  const [selectedRecipe, setSelectedRecipe] = useState({
    id: '',
    recipe: ''
  });
  const { recipes, editRecipe } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentRecipeId = props.match.params.id;

useEffect (() => {
    const recipeId = currentRecipeId;
    const selectedRecipe = recipes.find(recipe => recipe.id === recipeId)
    setSelectedRecipe(selectedRecipe)
}, [currentRecipeId, recipes])



  const onSubmit = () => {
    editRecipe(selectedRecipe)

    navigate('/favourites');
  }

  const updateTitle = (e) => {
    setSelectedRecipe({...selectedRecipe, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="component-id">
    <form onSubmit={onSubmit}>
      <label>Recipe</label>
      <input type="text" name="name" value={selectedRecipe.recipe} onChange={updateTitle} placeholder="Enter Recipe"></input>
    </form>
    <button type="submit">Edit</button>
    <Link to="/favourites">Cancel</Link>
  </div>
  )
}

export default EditRecipe