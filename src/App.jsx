import "./App.css";
import PokemonCard from "./Component/PokemonCard.jsx";

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbizar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },

];

export default App;