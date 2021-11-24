import axios from "axios";
import React, { useState } from "react";
import Titles from "./Titles"

const App = (props) => {
  const [titles, setTitles] = useState([])

  const getTitles = (title) => {
    console.log("clicked, TODO: make this work")
  }
  return (
    <div>
      <h1>Books Listed</h1>
      <button onClick={getTitles()}>Get Book Titles from Database</button>
      <Titles titles={titles} />
    </div>
  );
}

export default App;