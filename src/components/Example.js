import React,{useState} from 'react';
//import { useEffect } from "react";
import axios from 'axios';

const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    const useEffect=() => {
        axios.get('https://pokeapi.co/api/v2/pokemon??offset=0&limit=807.')
            //.then(response => response.json())
            .then(response => setPokemon(response.data.results))
    } 
 
    return (
        <div>
            <button onClick={useEffect} >Fetch Pokemon</button>
            { pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Example;