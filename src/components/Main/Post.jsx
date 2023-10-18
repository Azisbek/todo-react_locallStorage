import React from "react";
import styled from "styled-components";

const Post = ({ posts }) => {
  return (
    <ContainerPost>
      <main>
        {posts.map((el) => (
          <div>
            <img src={el.url} alt="cat" />
            <section>{el.date}</section>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </div>
        ))}
      </main>
    </ContainerPost>
  );
};

const ContainerPost = styled.div`
  display: flex;
  align-content: center;

  & main {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  & img {
    width: 350px;
    height: 270px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  & div {
    border-radius: 20px;
    padding-bottom: 20px;
    background-color: #ffffff;
    box-shadow: 5px 5px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & button {
    padding: 10px;
    border-radius: 5px;
    background-color: #ff3700;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-top: 10px;
  }
  & section {
    padding: 10px;
    margin-top: 10px;
    background-color: black;
    font-size: 16px;
    border-radius: 10px;
    color: white;
  }
  & p {
    padding: 6px;
  }
  & h3 {
    font-size: 20px;
    font-family: cursive;
  }
`;

export default Post;
