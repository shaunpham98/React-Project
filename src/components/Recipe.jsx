import React, { useEffect, useState } from 'react'

function Recipe() {

  const [recipe, setRecipe] = useState ([]);

  useEffect(() => {
    getRecipe();
  },{});

  const getRecipe = async () => {
    const api = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=fcf07356&app_key=a2032117784404588a8e3c5ecd86b7e3`);
    
    const data = await api.json();
    console.log(data);
    setRecipe(data.hits);
  }

  return (
    <div>
      {recipe.map((hit) => {
        return (
          <div key={hit.recipe.image}>
            <p>{hit.recipe.label}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Recipe