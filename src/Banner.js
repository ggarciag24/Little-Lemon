import bannerimg from "./images/bannerImage.jpg";

function Banner() {
    return(
        <div className="banner">
            <div className="banner-text-div" >
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned mediteranean restaurant that prides itself in great service and quality food</p>
                <button>Reserve a table</button>
            </div>
            <div>
                <img className="banner-img" src={bannerimg}/>
            </div>
        </div>
    )
}

export default Banner;