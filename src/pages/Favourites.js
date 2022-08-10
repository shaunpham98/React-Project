import React from 'react'
import './Pages.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Table, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from '../components/CRUD/List';

function Favourites() {

  let history = useNavigate();

  const editItem = (id, name, rating) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Rating', rating);
    localStorage.setItem('Id', id);
  }

  const removeItem = (id) => {
    var index = RecipeList.map(function(e){
      return e.id
    }).indexOf(id);

    RecipeList.splice(index,1);

    history('/favourites')

  }


  return (
    <div>
      <div className="heading fav">
        <h1>All Time Favourites</h1>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-love-dating-app-flaticons-lineal-color-flat-icons-5.png" width="50px" height ="50px"/>
      </div>

        <div>
          <Table stiped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Rating
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                RecipeList && RecipeList.length > 0 
                ?
                RecipeList.map((item) => {
                  return(
                    <tr>
                      <td>
                        {item.Name}
                      </td>
                      <td>
                        {item.Rating}
                      </td>
                      <td>
                        <Link to={'/edit'}>
                        <Button onClick={() => editItem(item.id, item.Name, item.Rating)}>Amend</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => removeItem(item.id)}>Remove</Button>
                      </td>
                    </tr>
                  )
                })
                :
                "Please add your favourite recipes!"
              }
            </tbody>
          </Table>
          <br>
          </br>
          <Link to="/create">
            <Button size="lg">Create</Button>
          </Link>
        </div>
    </div>
  )
}

export default Favourites