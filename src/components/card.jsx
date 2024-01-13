import React from "react";
import '../styles/card.css';

const Card = ({
    name,
    img, 
    type, 
    hp, 
    attack,
    defense, 
    speed
}) => {

return (
    <div>
    <picture>
        <img src={img} alt="Country Flag" />
    </picture>
    <section>
        <h2>{name}</h2>
        <p>
            <span className="country-info-highlight"> Type: </span>
            {type}
        </p>
        </section>
    </div>
);
};

export default Card;