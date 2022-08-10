import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './List';
import {Link, useNavigate} from 'react-router-dom'

function Edit() {

    const [name, setName] = useState('')
    const [rating, setRating] = useState('');
    const [id, setId] = useState('')

    let history = useNavigate();

    var index = RecipeList.map(function(e){
        return e.id
      }).indexOf(id);

    const onSubmit = (e) => {
        e.preventDefault();

        let a = RecipeList[index];
        a.Name = name;
        a.Rating = rating;

        history("/favourites");
    }

        useEffect(() => {
            setName(localStorage.getItem('Name'))
            setRating(localStorage.getItem('Rating'))
            setId(localStorage.getItem('Id'))
        })


  return (
    <div>
        <Form>
            <Form.Group>
                <form type="text" placeholder="Enter Recipe" value={name} required onChange={(e) => setName(e.target.value)}>
                </form>
            </Form.Group>
            <Form.Group>
                <form type="text" placeholder="Enter Rating" value={rating} required onChange={(e) => setRating(e.target.value)}>
                </form>
            </Form.Group>
            <Button onClick={(e) => onSubmit(e)} type="submit">Amend</Button>
        </Form>
    </div>
  )
}

export default Edit