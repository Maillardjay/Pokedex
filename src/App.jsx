import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Component/PokemonCard.jsx";
import NavBar from "./Component/Navbar";


const pokemonList = [
  {
      name: "Bulbizar",
      imgSrc: 
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",  
    },  
    { 
      name: "Salmeche",
      imgSrc: 
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", 
    }, 
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    }, 
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    }, 
    {
      name: "Mew",
    },
  ];

function App() {

  useEffect(
    () => { alert("Hello Pokemon Trainer :) ");
    }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex={pokemonIndex}
      setPokemonIndex={setPokemonIndex}
      pokemonList={pokemonList} />
    </div>
  );
}

export default App