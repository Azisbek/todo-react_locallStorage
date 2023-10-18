import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ onCancel, addSavePost }) => {
  const [titlePost, setTitlePost] = useState("");
  const [textPost, setTextPost] = useState("");
  const [imagePost, setImagePost] = useState("");

  const inputChangeHandler = (event) => {
    const inputName = event.target.name;
    if (inputName === "title") {
      setTitlePost(event.target.value);
    } else if (inputName === "text") {
      setTextPost(event.target.value);
    } else if (inputName === "image") {
      setImagePost(event.target.value);
    }
  };

  const submitClick = (event) => {
    event.preventDefault();
    const data = {
      title: titlePost,
      text: textPost,
      url: imagePost,
      id: Math.random().toString(),
    };
    console.log(data);

    addSavePost(data);
    // setImagePost("");
    // setTextPost("");
    // setTitlePost("");
  };

  return (
    <form onSubmit={submitClick}>
      <FormInput>
        <input
          value={titlePost}
          onChange={inputChangeHandler}
          name="title"
          type="text"
          placeholder="title"
        />
        <input
          value={textPost}
          onChange={inputChangeHandler}
          name="text"
          type="text"
          placeholder="text"
        />
        <input
          value={imagePost}
          onChange={inputChangeHandler}
          name="image"
          type="url"
          placeholder="image"
          min="01.01.2022"
          max="12.12.2025"
        />
      </FormInput>

      <FormButton>
        <Button>Add Post</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </FormButton>
    </form>
  );
};

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  && input {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
  gap: 10px;
`;

const FormButton = styled.div`
  display: flex;
  gap: 20px;
`;

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

export default Form;
