import styled from "styled-components";

const phoneSize = "768px";

export const Content = styled.div`
  margin: 0;
  font-size: 36px;
  font-family: sans-serif;
  padding: 30px;
  @media screen and (max-width: ${phoneSize}) {
    font-size: 24px;
    padding: 20px;
  }
  & p {
    text-align: center;
  }
`;

const Footer = () => {
    return(
        <Content>
            <p>Пока вы нас изучаете, в нашей команде уже работает свыше 1000 человек!</p>
        </Content>
    )
}

export default Footer