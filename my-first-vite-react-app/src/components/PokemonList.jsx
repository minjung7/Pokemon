
import MOCK_DATA from "./MockData";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const StContainer = styled.div`
  display: grid;
  max-width: 1280px;
  width: 100%;
  margin: 20px auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(248, 248, 248);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonList = ({addCard}) => {


  return (
    <StContainer>
      {MOCK_DATA.map((item) => (
        <PokemonCard
          key={item.id}
          id={item.id}
          name={item.korean_name}
          img_url={item.img_url}
          addCard={addCard}
        />
      ))}
      ;
    </StContainer>
  );
};

export default PokemonList;
