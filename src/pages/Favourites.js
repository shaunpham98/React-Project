import React from 'react'
import './Pages.css'
import { Button, Table, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from '../components/CRUD/List';

function Favourites() {
  return (
    <div>
      <div className="heading fav">
        <h1>All Time Favourites</h1>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-love-dating-app-flaticons-lineal-color-flat-icons-5.png" width="50px" height ="50px"/>
      </div>
      <React.Fragment>
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
                    </tr>
                  )
                })
                :
                "Please add your favourite recipes!"
              }
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Favourites