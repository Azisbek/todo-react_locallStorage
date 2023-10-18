import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Headers>
      <div>
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <ul>
          <li>about us</li>
          <li>contacts</li>
          <li>
            <button>sign in</button>
          </li>
          <li>
            <button>sign up</button>
          </li>
        </ul>
      </div>
    </Headers>
  );
};

const Headers = styled.header`
  width: 100%;
  background-color: #001eff;

  img {
    width: 130px;
  }
  div {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
    color: white;
    font-size: 30px;
    button {
      padding: 10px;
      border-radius: 5px;
      background-color: #ff8800;
      border: none;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
  }
`;
export default Header;
