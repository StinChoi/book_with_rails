import axios from "axios";
import React, { useState, useEffect } from "react";
import Titles from "./Titles"
import TitleForm from "./TitleForm";

const App = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [titles, setTitles] = useState([]);

  const getTitles = async () => {
    let response = await axios.get("/titles");
    setTitles(response.data);
  };

  useEffect(() => {
    getTitles();
  }, []);

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  // Just setting up a function but not calling 

  const addTitle = (title) => {
    setTitles([title, ...titles]);
  };

  const deleteTitle = async (id) => {
    let response = await axios.delete(`/titles/${id}`);
    let filteredTitles = titles.filter((i) => i.id !== id);
    setTitles(filteredTitles);
  };

  const updateTitle = (title) => {
    let updatedTitles = titles.map((i) => (i.id === title.id ? title : i));
    setTitles(updatedTitles);
  }

  // Calling function here
  return (
    <div>
      <h1>Books Listed</h1>
      <button onClick={toggleNewForm}>
        {showNewForm ? "Cancel" : "New Book"}
      </button>
      {showNewForm && <TitleForm addTitle={addTitle} />}
      <Titles titles={titles} updateTitle={updateTitle} deleteTitle={deleteTitle} />
    </div>
  );
};

export default App;