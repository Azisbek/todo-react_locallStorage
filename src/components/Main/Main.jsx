import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Post from "./Post";

const Main = ({ posts, addPost, removePost }) => {
  const [stateForm, setStateForm] = useState(false);

  const savePost = (posts) => {
    const data = {
      ...posts,
      date: new Date().toLocaleDateString(),
      id: Math.random().toString(),
    };
    addPost(data);
  };

  const clickButtonHandler = () => {
    setStateForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <FormBlock>
        {stateForm === true ? (
          <Form addSavePost={savePost} onCancel={clickButtonHandler} />
        ) : (
          <Button onClick={clickButtonHandler}>добавить новый пост</Button>
        )}
      </FormBlock>

      <ContainerPost>
        <Post posts={posts} removePost={removePost} />
      </ContainerPost>
    </>
  );
};

const Button = styled.button`
  background-color: #ff8800;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
`;

const FormBlock = styled.div`
  margin: 0 auto;
  background-color: #001eff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  padding: 20px 50px;
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ContainerPost = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 1300px;
  margin: 0 auto;
`;

export default Main;
