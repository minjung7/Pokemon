import styled from "styled-components";

const StContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 20px auto;
  text-align: center;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  padding: 20px;
`;

const StBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const Dashboard = ({ selectedCard, removeCard }) => {
  return (
    <StContainer>
      <h2>나만의 포켓몬</h2>
      <StBox>
        {selectedCard.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.img_url} />
            <p>No. {pokemon.id}</p>
            <p>{pokemon.name}</p>
            <StyledButton onClick={() => removeCard(pokemon.id)}>
              삭제
            </StyledButton>
          </div>
        ))}
      </StBox>
    </StContainer>
  );
};

export default Dashboard;
