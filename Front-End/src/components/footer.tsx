import React from 'react';

// Footer Component
function Footer()
{
    function getDate(): number
    {
        let date = new Date();
        return date.getFullYear();
    }

    return(
        <nav className="navbar fixed-bottom bg-light">
            <div className="container-fluid">
            <h5 id="copyright">&copy; Copyright { getDate() }</h5>
            </div>
        </nav>
    );
}

export default Footer;