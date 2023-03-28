import greekSalad from "./images/greek-salad.jpg";
import bruchetta from "./images/bruchetta.png";
import lemonDessert from "./images/lemon-dessert.jpg";
import FoodCard from "./FoodCard";

function Main() {
    const foods = [{img: greekSalad, name: "Greek Salad", price: 12.99, description: "The famous greek salad with crispy lettuce, peppers, olives, and our chicago style feta cheese, garnished with crunchy garlic and rosemary crutons."}, {img: bruchetta, name: "Bruchetta", price: 5.99, description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}, {img: lemonDessert, name: "Lemon Dessert", price: "5.00", description: "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}];

    return(
        <main>
            <div className="specials-heading">
            <h1>This weeks specials!</h1>
            <button className="online-menu-btn">Online Menu</button>
            </div>
            <div className="card-container">
                {foods.map((food) => {
                    return <FoodCard img={food.img} name={food.name} price={food.price} description={food.description} />
                })}
            </div>
        </main>
    )
}

export default Main;