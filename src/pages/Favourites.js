import React from 'react'
import './Pages.css'
import { Link, useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap';
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

        <div className="table-item">
          <table className="table-div">
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
                        <button onClick={() => editItem(item.id, item.Name, item.Rating)}>Amend</button>
                        </Link>
                        &nbsp;
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </td>
                    </tr>
                  )
                })
                :
                "Please add your favourite recipes!"
              }
            </tbody>
          </table>
          <br>
          </br>
          <Link to="/create">
            <button >Create</button>
          </Link>
        </div>
    </div>
  )
}

export default Favourites