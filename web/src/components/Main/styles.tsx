import styled from "styled-components";

const phoneSize = "816px";
const Monitor = "1200px";
const largeMonitor = "1920px";

export const MainContainer = styled.div`
  display: flex;
  & .Img{
    margin: 100px;
  }
  @media screen and (max-width: ${phoneSize}) {
    flex-direction: column;
  }
`;

export const QueryBlock = styled.div`
  display: flex;
  flex-direction: column;
  & :hover{
    background-color: #007a14;
  }
  @media screen and (max-width: ${phoneSize}) {
    flex-direction: row;
  }
`;

export const FindJob = styled.button`
  display: flex;
  font-size: 36px;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  align-items: center;
  border: 5px grey solid;
  background-color: #58B74F;
  color: white;
  padding: 48px;
  cursor: pointer;
  @media screen and (max-width: ${largeMonitor}) {
    font-size: 60px;
    & p{
      padding-left: 60px;
    }
  }
  @media screen and (max-width: ${Monitor}) {
    font-size: 36px;
    & p{
      padding-left: 30px;
    }
  }
  @media screen and (max-width: ${phoneSize}) {
    font-size: 18px;
    padding: 6px;
    height: auto;
  }
  & div {
    flex-shrink: 0;
  }
  & p {
    margin: auto;
  }
`;

export const ForClients = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  align-items: center;
  border: 5px grey solid;
  background-color: #025C2D;
  color: white;
  padding: 48px;
  cursor: pointer;
  @media screen and (max-width: ${largeMonitor}) {
    font-size: 52px;
    & p{
      padding-left: 60px;
    }
  }
  @media screen and (max-width: ${Monitor}) {
    font-size: 32px;
    & p{
      padding-left: 10px;
    }
  }
  @media screen and (max-width: ${phoneSize}) {
    font-size: 18px;
    padding: 6px;
    height: auto;
  }
  & div {
    flex-shrink: 0;
  }
  & p {
    margin: auto;
  }
`;

export const MobileHider = styled.div`
  display: flex;
  @media screen and (max-width: ${phoneSize}) {
    display: none;
  }
`;

export const SomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 570px;
  font-family: sans-serif;
  color: #00381b;
  background-color: #00c45f;
  padding: 48px;

  & h1 {
    position: relative;
    font-size: 40px;
    text-align: center;
  }
  & p{
    position: relative;
    margin-top: 12px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  & p span{
    font-style: italic;
  }
  @media screen and (max-width: ${phoneSize}) {
    height: 280px;

    & h1 {
      font-size: 18px;
    }

    & p {
      font-size: 16px;
    }
  }
`;