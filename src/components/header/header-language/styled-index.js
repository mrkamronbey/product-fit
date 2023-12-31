import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .lang_btn_wrapp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border: 2px solid #f05670;
    color: #f05670;
    border-radius: 15px;
    padding: 3px;
  }
  .lang_btn_wrapp > button {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 105.5%;
    color: #8e8e8e;
    background: none;
    outline: none;
    cursor: pointer;
    border: none;
    transition: 0.5s;
    padding: 8px;
    border-radius: 10px;
  }

  @media only screen and (max-width: 1024px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
  }
  @media only screen and (max-width: 872px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
    button {
      display: block;
      background-color: transparent;
      border: none;
    }
  }
  @media only screen and (max-width: 450px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 10px;
      padding-right: 9px;
      font-size: 18px;
    }
    .lang_btn_wrapp {
      display: none;
    }
  }

  
`;
