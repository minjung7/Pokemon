
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

const Styledimg = styled.img`
    width: 600px;
    margin-bottom: 20px;
`

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

const Home = () => {
    const navigate = useNavigate();

    return (
      <StyledDiv>
        <Styledimg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"></Styledimg>
        <StyledButton
          onClick={() => {
            navigate("/Dex");
          }}
        >
          포켓몬 도감 시작하기
        </StyledButton>
      </StyledDiv>
    );
};

export default Home;