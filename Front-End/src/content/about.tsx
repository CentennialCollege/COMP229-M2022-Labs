import React, { useEffect } from 'react';

function About()
{
    useEffect(()=>{
        document.title = "About Us";
    });


    return(
        <div className="container">
            <h1>About Us</h1>
            <hr />
            <p>Here is detail about us...</p>
        </div>
    );
}

export default About;