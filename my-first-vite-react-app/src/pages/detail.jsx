import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../components/MockData";
import styled from "styled-components";


const StBox = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
`;

const Detail = () => {
  const navigate = useNavigate();
const {id} = useParams();
console.log(id);

  

  const detailData = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(id)
  );
  console.log(detailData);

  return (
    <StBox>
      <img src={detailData.img_url}></img>
      <h2>{detailData.korean_name}</h2>
      <h3>Type : {detailData.types}</h3>
      <p>{detailData.description}</p>
      <StyledButton onClick={() => navigate("/Dex")}>뒤로가기</StyledButton>
    </StBox>
  );
};

export default Detail;
