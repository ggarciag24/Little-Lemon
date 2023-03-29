import {Link} from "react-router-dom"


function OrderFoodCard(props) {
    return (
        <div className="food-card">
            <img className="food-img" src={props.img}/>
            <h2 className="food-detail">{props.name}</h2>
            <h3 className="food-detail">$ {props.price}</h3>
            <p className="food-detail">{props.description}</p>
            <button className="card-btn">Add to Cart</button>
        </div>
    )
}

export default OrderFoodCard;