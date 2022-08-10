import React, { useEffect, useState } from 'react'
import Search from './Search';
import './Recipe.css'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;


function Recipe() {

  const [recipe, setRecipe] = useState ([]);
  const [search, setSearch] = useState ("");
  const [query, setQuery] = useState("meat");

  useEffect(() => {
    getRecipe();
  },[query]);

  const getRecipe = async () => {
    const api = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await api.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }
  
  return (
    <div>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipe-list">
        {recipe.map(recipe =>(
          <Search
          key={recipe.recipe.label} f
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories.toFixed(2)}
          image={recipe.recipe.image}
          url={recipe.recipe.url}
          meal={recipe.recipe.mealType}
          />
        ))}
        </div>
        <div style={{height:"100px"}}></div>
    </div>
  )
}

export default Recipe