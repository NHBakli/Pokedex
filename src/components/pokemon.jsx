import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./card";
import '../styles/card.css';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

            const fetchedPokemon = await Promise.all(res.data.results.map(async (pokemon) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                return poke.data;
            }));

            setPokemon(fetchedPokemon);
        }

        getPokemon();
    }, [])

    return (
        <div className="card-container">
            {pokemon.map((pokeData, index) => (
                <Card 
                key={index} 
                img={pokeData.sprites.other.dream_world.front_default}
                name={pokeData.name} 
                type={pokeData.types[0].type.name}
                />
            ))}
        </div>
    );
}

export default Pokemon;
