import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './List';
import {v4 as uuid} from "uuid"
import {Link, useNavigate} from 'react-router-dom'

function Create() {

    const [name, setName] = useState('')
    const [rating, setRating] = useState('');

    let history = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = rating;

        RecipeList.push({id: uniqueId, Name : a, Rating: b});

        history("/favourites");
    }

  return (
    <div>
        <Form>
            <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Enter Recipe" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formRating">
                <Form.Control type="text" placeholder="Enter Rating" required onChange={(e) => setRating(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => onSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default Create