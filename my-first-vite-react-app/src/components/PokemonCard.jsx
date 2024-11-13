import { Link } from "react-router-dom";
import styled from "styled-components";

const StBox = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
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



const PokemonCard = ({ id, name, img_url, addCard }) => {
  const handleAdd = () => {
    console.log(id);
    addCard({ id, name, img_url });
  };

  return (

      <StBox>
      <Link to={`/detail/${id}`}
        style={{ textDecoration: "none" }}>
          <img src={img_url}></img>
          <p>{name}</p>
          <p>NO.{id}</p>
        </Link>
        <StyledButton onClick={handleAdd}>추가</StyledButton>
      </StBox>

  );
};

export default PokemonCard;
