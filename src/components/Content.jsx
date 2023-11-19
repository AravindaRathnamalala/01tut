import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Araa');
  const [count, setCount] = useState(0)

  const handleNameChange = () => {
    const names = ["John", "Araa", "Rash"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log(count);
    setCount(count+1);
  };

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
