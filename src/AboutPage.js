import greekSalad from "./images/greek-salad.jpg";
import spread from "./images/bannerImage.jpg";
import bruchetta from "./images/bruchetta.png";
import lemonDessert from "./images/lemon-dessert.jpg";

function AboutPage() {
    return(
        <div>
            <div className="about-banner">
            <h1>About</h1>
            <h1>Little Lemon</h1>
            <p>Little Lemon is a family owned Mediteranean restaurant that takes pride in providing great customer service and quality foods. We hope to create a memorable experience that will make you want to come back and enjoy yourselfs time and time again. We have a variety of foods and are our dedicated chefs are very willing to edit dishes to your preference. You can contact us through phone or email, our phone number is: <a>(000) 000-0000</a> and our email is: <a>exampleEmail@example.com</a></p>
            </div>
            <div className="banner-images">
                <img src={bruchetta}/>
                <img src={lemonDessert}/>
                <img src={greekSalad}/>
                <img src={spread}/>
            </div>
        </div>
    )
}

export default AboutPage;