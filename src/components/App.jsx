import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [titleName, setTitleName] = useState("");

  let handleSubmit = (event) => {
    setTitleName(name);
    event.preventDefault();
  };

  let handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <h1>Hello {titleName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
