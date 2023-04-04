import React, { useEffect } from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePreviewClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  useEffect(() => {
    if (pokemonList[pokemonIndex].name === "Pikachu") {
      alert("Pika Pikachu !!!");
    }
  }, [pokemonIndex, pokemonList]);

  return (
    <div>
      <button onClick={handlePreviewClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
    </div>
  );
}

export default NavBar;