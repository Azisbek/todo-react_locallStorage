import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
const bdPost = [];

function App() {
  const [postArray, setPostArray] = useState(bdPost);
  useEffect(() => {
    const getPostData = JSON.parse(localStorage.getItem("posts"));
    if (getPostData) {
      setPostArray(getPostData);
    }
  }, []);
  const addPost = (newPost) => {
    const postItemLocal = [newPost, ...postArray];
    setPostArray(postItemLocal);
    localStorage.setItem("posts", JSON.stringify(postItemLocal));
  };

  return (
    <div className="App">
      <Header />
      <Main posts={postArray} addPost={addPost} removePost={setPostArray} />
    </div>
  );
}

export default App;
