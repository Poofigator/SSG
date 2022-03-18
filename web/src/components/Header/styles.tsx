import styled from "styled-components";

const phoneSize = "816px";

export const Content = styled.div`
  display: flex;
  padding: 30px 60px;
  font-size: 36px;
  font-family: sans-serif;
  align-items: center;
  @media screen and (max-width: ${phoneSize}) {
    padding: 15px 30px;
    font-size: 18px;
  }
`;

export const Phone = styled.div`
  display: flex;
  margin-left: 256px; 
  height: 60px;
  width: 60px;
  padding: 8px;
  background-color: #3C4B3E;
  border-radius: 15px;
  @media screen and (max-width: ${phoneSize}) {
    display: none;
  }
`;

export const PhoneNumber = styled.div`
  margin: 0px 18px;
  font-size: 24px;
  @media screen and (max-width: ${phoneSize}) {
    display: none;
  }
`;