import React, {useEffect, useState, useContext} from 'react'
import { GlobalContext } from '/home/shaunpham/MyProjects/Phase_2/academyxi_final/src/context/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

function NewRecipe() {
  const [title, setTitle] = useState('')
  const { addRecipe } = useContext(GlobalContext);
  const navigate = useNavigate();



  const onSubmit = () => {
    const plusRecipe = {
      id: uuid(),
      recipe: title
    }
    addRecipe(plusRecipe);
  }

  navigate('/favourites');

  const updateTitle = (e) => {
    setTitle(e.target.value);
  }

  
  

  return (
      <form onSubmit={onSubmit} className="component-id">
          <label>Recipe</label>
          <input type="text" value={title} onChange={updateTitle} placeholder="Enter Recipe"></input>
          <button type="submit">Submit</button>
          <Link to="/favourites">Cancel</Link>
      </form>
  )
}

export default NewRecipe