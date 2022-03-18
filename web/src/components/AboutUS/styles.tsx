import styled from "styled-components";

const phoneSize = "816px";


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  font-size: 36px;
  font-family: sans-serif;
  align-items: center;
  text-align: center;
  & p {
    margin-left: 10px;
    margin-top: 20px;
    font-size: 26px;
  }
  & p span {
    font-size: 32px;
    font-weight: bold;
  }
  @media screen and (max-width: ${phoneSize}) {
    padding: 15px 30px;
    font-size: 24px;
    & p {
        margin-left: 10px;
        margin-top: 20px;
        font-size: 18px;
  }
    & p span {
        font-size: 20px;
        font-weight: bold;
  }
  }
`;
