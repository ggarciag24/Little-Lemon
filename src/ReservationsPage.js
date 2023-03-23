import mainImg from "./images/reservations.png";
import time from "./images/time.webp";
import calendar from "./images/calendar.png";

function ReservationsPage() {
    return(
        <div>
            <div className="reservation-banner">
                <img src={mainImg}/>
            </div>
            <div className="reserve-heading">
                <h1>Reserve a table:</h1>
                <p>Bring your family and friends to have an amazing dining experience!</p>
            </div>
                <div className="date-details">
                    <h2>Date</h2>
                    <img className="details-icon" src={calendar} />
                </div>
                <div className="time-details">
                    <h2>Time</h2>
                    <img className="details-icon" src={time} />
                </div>
                <div className="diners-details">
                    <h3>Number of diners</h3>
                    <p><button>-</button>  2  <button>+</button></p>
                </div>
            <button className="reserve-btn">Reserve</button>
        </div>
    )
}

export default ReservationsPage;