import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            
       
            <Link className='home-men' style={{ color: 'black' }} to="/Products/Women" ><h3>Shoes for Men</h3></Link>

            <Link className='home-women' style={{ color: 'black' }} to="/Products/Women" ><h3>Shoes for Women </h3></Link>



        </div>
    )
}

export default Home
