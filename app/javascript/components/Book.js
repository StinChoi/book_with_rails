import React, { useState } from "react";
import Titles from "./Titles"

const Book = (props) => {
  const [titles, setTitles] = useState([])

  const getTitles = () => {
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

export default Book;