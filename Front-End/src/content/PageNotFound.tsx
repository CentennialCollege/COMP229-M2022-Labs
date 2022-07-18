import React, { useEffect } from 'react';

function PageNotFound()
{
    useEffect(()=>{
        document.title = "ERROR: 404";
    });

    return(
        <div className="container">
            <h1>ERROR: 404 - Page Not Found!</h1>
        </div>
    )
}

export default PageNotFound;
