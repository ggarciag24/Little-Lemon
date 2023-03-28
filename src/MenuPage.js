import greekSalad from "./images/greek-salad.jpg";
import bruchetta from "./images/bruchetta.png";
import lemonDessert from "./images/lemon-dessert.jpg";
import baba from "./images/baba-ganoush.webp";
import salmonSalad from "./images/salmon-avocado-salad.webp";
import tunaMeatballs from "./images/baked-tuna-meatballs.webp";
import shrimp from "./images/garlic-butter-shrimp.webp";
import basilChicken from "./images/basil-chicken-kumquats.webp";
import bakedCod from "./images/baked-cod.webp";
import crema from "./images/crema.webp";
import macarons from "./images/macarons.webp";
import madarica from "./images/madarica.webp";
import FoodCard from "./FoodCard";


function MenuPage() {
    const foods = [{img: baba, name: "Baba Ganoush", price: 4.99, description: "Made with eggplant, tahini, lemon juice, olive oil, garlic, salt and parsley."}, {img: bruchetta, name: "Bruchetta", price: 5.99, description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}, {img: salmonSalad, name: "Salmon Avocado Salad", price: 11.99, description: "This contains salmon, avocado, baby spinach, tomatoes, cucumber and red onions."}, {img: greekSalad, name: "Greek Salad", price: 12.99, description: "The famous greek salad with crispy lettuce, peppers, olives, and our chicago style feta cheese, garnished with crunchy garlic and rosemary crutons."}, {img: tunaMeatballs, name: "Baked Tuna Meatballs", price: 6.99, description: "Made with tuna, olive oil, garlic, onions, spinach, almond flour, eggs, mayonnaise, lemon juice, salt, pepper, fresh parsley and dill."}, {img: shrimp, name: "Garlic Butter Shrimp", price: "14.00", description: "These shrimp come straight from the ocean, cookde with butter, garlic, lemon juice, parsely, salt and pepper."}, {img: basilChicken, name: "Basil Chicken with Kumquats", price: 12.99, description: "This dish is made with olive oil, chicken thighs, sliced kumquats, red onions, salt and pepper."}, {img: bakedCod, name: "Garlic Herb Baked Cod", price: 11.99, description: "Made with wild atlantic or pacific cod, lemon, garlic, butter, parsley and paprika "}, {img: lemonDessert, name: "Lemon Dessert", price: "5.00", description: "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}, {img: crema, name: "Crema Catalana", price: "5.00", description: "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"}, {img: macarons, name: "Macarons", price: "5.00", description: "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}, {img: madarica, name: "Madarica", price: "5.00", description: "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}];
    return(

        <div className="menu-container">
        <div className="menu-heading">
            <h1>Menu</h1>
        </div>
        <div className="menu-card-container">
                {foods.map((food) => {
                    return <FoodCard img={food.img} name={food.name} price={food.price} description={food.description} />
                })}
            </div>
        </div>
    )

}

export default MenuPage;