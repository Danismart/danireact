import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Comment from "./components/Comment";
import Footer from "./components/Footer";

function App() {
  const Name = "Daniela";
  const lastName = "Alonso";
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };
  const Text =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque similique placeat blanditiis inventore. Magnam deleniti, perferendis fugiat labore debitis non illum tenetur iure, in accusamus adipisci dolorum dignissimos deserunt?";
  return (
    <div className="App">
      <Header />
      <Body pepito="dani" />
      <Comment comment={comment} />
      <Footer Name={Name} lastName={lastName} />
    </div>
  );
}

export default App;
