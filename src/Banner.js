import bannerimg from "./images/bannerImage.jpg";
import {Link} from "react-router-dom"

function Banner() {
    return(
        <div className="banner">
            <div className="banner-text-div" >
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned mediteranean restaurant that prides itself in great service and quality food</p>
                <Link to="/reservations" ><button className="banner-button">Reserve a table</button></Link>
            </div>
            <div>
                <img className="banner-img" src={bannerimg}/>
            </div>
        </div>
    )
}

export default Banner;