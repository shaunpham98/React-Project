import React, {useState} from 'react'
import RecipeList from './List';
import {v4 as uuid} from "uuid"
import {Link, useNavigate} from 'react-router-dom'
import './CRUD.css' 

function Create() {

    const [name, setName] = useState('')
    const [rating, setRating] = useState('');

    let history = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,4);

        let a = name,
        b = rating;

        RecipeList.push({id: uniqueId, Name : a, Rating: b});

        history("/favourites");
    }

  return (
    <div className="new-form">
        <form>
            
                <input type="text" placeholder="Enter Recipe" required onChange={(e) => setName(e.target.value)}>
                </input>
        
                <input type="text" placeholder="Enter Rating" required onChange={(e) => setRating(e.target.value)}>
                </input>

            <button className="create" onClick={(e) => onSubmit(e)} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Create