import React from 'react'
import { Link } from "react-router-dom"

const PokemonIndexItem = (props) => (
    <li><Link to="/pokemon/:pokemonId">
        {props.pokemon.name}
        {props.pokemon.imageUrl}
        </Link>
    </li>
)

export default PokemonIndexItem;