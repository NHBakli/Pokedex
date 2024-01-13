import axios from "axios";
import React, { useState, useEffect } from "react";



function Pokemon() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

            res.data.results.forEach(async (pokemon) =>{
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`); 
                
                setPokemon((poke) => [...poke, poke.data])
            })
        }
        getPokemon()
    }, [])

    return(
        <h1>Bienvenue !</h1>
    )

}

export default Pokemon;