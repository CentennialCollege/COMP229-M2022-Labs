import React from 'react';
import { Link } from 'react-router-dom';

function Home()
{
    return(
        <div className="container">
            <h1 className='mb-5'>Welcome to our Site!</h1>

            <Link to="/about">
                <button className="btn btn-primary">Learn About Us!</button>
            </Link>
        </div>
    )
}

export default Home;