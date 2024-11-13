import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  console.log(children);
  const [selectedCard, setSelectedCard] = useState([]);
  const addCard = (pokemon) => {
    if (selectedCard.length >= 6) {
      alert("포켓몬은 6개까지만 선택 가능합니다.");
    } else if (
      selectedCard.some((prevPokemon) => prevPokemon.id === pokemon.id)
    ) {
      alert("이미 존재하는 포켓몬입니다.");
    } else {
      setSelectedCard([...selectedCard, pokemon]);
    }
  };

  const removeCard = (id) => {
    const newData = selectedCard.filter((card) => card.id !== id);
    setSelectedCard(newData);
  };

  return (
    <PokemonContext.Provider value={{ selectedCard, addCard, removeCard }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
