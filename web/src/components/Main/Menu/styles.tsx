import styled from "styled-components"

const phoneSize = "768px";

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  border: 4px grey solid;
  background: linear-gradient(240deg, #58B74F 20%, #025C2D 90%);
  border: 5px solid #3C4B3E;
  font-size: 24px;
  @media screen and (max-width: ${phoneSize}) {
    height: 48px;
    font-size: 18px;
  }
`;

export const Item = styled.div`
  font-family: sans-serif;
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 220px;
  color: white;
  &:hover {
    cursor: pointer;
    color: #043019;
    font-size: 25px;
    text-decoration: underline;
  }
  @media screen and (max-width: ${phoneSize}) {
    &:hover {
    font-size: 19px;
  }
  }
`;