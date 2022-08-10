import React from 'react'
import './Pages.css'
import img1 from '../img/r1.PNG'
import img2 from '../img/r2.PNG'
import img3 from '../img/r3.PNG'



function Home() {
  return (
    <div>
        <div className="heading fav"><h1>Home</h1>
        <img src="https://img.icons8.com/doodle/48/000000/home--v1.png" width="50px" height ="50px"/>
        </div>
        <div className="text-top">
        <h2>Welcome to my React Project!</h2>
        <strong>Developed by Shaun Pham</strong>
        <p>See below slides of description, challenges and learnings that came with this project.</p>
        </div>
        <div className="presentation">
          <img src={img1} width="800px"/>
          <img src={img2} width="800px"/>
          <img src={img3} width="800px"/>
        </div>
    </div>

  )
}

export default Home