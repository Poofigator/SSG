import styled from "styled-components";

const phoneSize = "816px";

export const MobileChanger = styled.div`
  display: flex;
  @media screen and (max-width: ${phoneSize}) {
    display: none;
  }
`;
export const ComputerChanger = styled.div`
  display: flex;
  @media screen and (min-width: ${phoneSize}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  font-size: 36px;
  font-family: sans-serif;
  align-items: center;
  background-color: #CDD7CE;
  @media screen and (max-width: ${phoneSize}) {
    padding: 15px 30px;
    font-size: 24px;
  }
  & p {
    font-size: 24px;
    margin-left: 10px;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 400px; 
  height: 30px;
  font-size: 18px;
  @media screen and (max-width: ${phoneSize}) {
    width: 260px;
    height: 24px;
  }
`;

export const InputField = styled.textarea`
  font-size: 24px;
  width: 400px;
  height: 200px;
  @media screen and (max-width: ${phoneSize}) {
    width: 260px;
    height: 100px;
  }
`;

export const Policy = styled.div`
  display: flex;
  align-items: flex-end;
  width: 400px; 
  height: 120px;
  margin-top: 5px;
  
  @media screen and (max-width: ${phoneSize}) {
    width: 260px;
    height: 160px;
  }
  & p {
    margin-top: 0px;
    font-size: 12px;
  }
`;

export const SendBtn = styled.button`
  font-size: 28px;
  margin-top: 50px;
  width: 200px;
  height: 50px;
`;