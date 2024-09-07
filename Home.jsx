import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div >
        <h1 >Student Registration</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusamus odio. Sequi nam, recusandae rerum rem voluptatibus <br></br>maxime consequatur aperiam! Vel fuga itaque sunt magnam eum placeat? Commodi, culpa voluptate.</p>
        <br/>
        <nav>       
        <ul>       
        
            <button className='first'><Link to="/Login">Login</Link></button>    
        </ul>
    </nav>

    </div>
  )
}

export default Home;