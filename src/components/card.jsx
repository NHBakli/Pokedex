import React from "react";

const Card = ({
    id,
    name,
    img, 
    type, 
    hp, 
    attack,
    defense, 
    speed
}) => {

return (
    <div className="card">
        <picture>
            <img src={img} alt="Pokemon" />
        </picture>
        <section>
            <h2>{name}</h2>
            <p>
                <span className="pokemon infos"></span>
                {type}
            </p>
        </section>
    </div>
);
};

export default Card;