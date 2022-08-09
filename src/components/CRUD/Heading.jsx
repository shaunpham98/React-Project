import React from 'react'
import { Link } from 'react-router-dom'

function Heading() {
  return (
    <nav>
        <div>
            <div className="default" href="/">My Favourites</div>
            <nav>
                <nav>
                    <Link to="/new">Add Recipe</Link>
                </nav>
            </nav>
        </div>
    </nav>
  )
}

export default Heading