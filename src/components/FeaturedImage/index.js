import React from "react";
import featuredImage from "../../assets/landscape-flowers.jpg"
import "../../index.css"

function FeaturedImage () {
    return (
        <div className="featured-image">
              <img src={featuredImage} alt="featured-img" />
        </div>
    )
}

export default FeaturedImage;