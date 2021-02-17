import React from 'react';
import "react-bootstrap"
// import featuredImage from "../../assets/landscape-flowers.jpg"


function Card ({children}) {
    return (

        <div className="card clear-card">
            {children}
        </div>
 );
 }

 export default Card;