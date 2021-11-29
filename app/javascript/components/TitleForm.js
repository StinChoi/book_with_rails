import axios from "axios";
import React, { useState } from "react";

const TitleForm = (props) => {
  const {
    id,
    addTitle,
    books: initialBooks,
    author: initialAuthor,
    updateTitle,
  } = props;
  const [book, setBookName] = useState(initialBooks ? initialBooks : "");
  const [author, setAuthor] = useState(initialAuthor ? initialAuthor : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title: title, author: author });
    const title = { title: title, author: author };

    if (id) {
      try {
        let response = await axios.put(`/titles/${id}`, item);
        console.log(response.data);
        updateTitle(response.data);
      } catch (err) {
        alert("Error Occured");
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors[0]);
      }
    } else {
      try {
        let response = await axios.post("/titles", title);
        console.log(response.data);
        addTitle(response.data);
      } catch (err) {
        alert("Error Occurred");
        console.log(err);
        console.log(err.repsonse);
        console.log(err.response.data.errors[0]);
      }
    }
  };
  return (
    <div>
      <h1>{id ? "Edit" : "New"} Title Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Book</p>
        <input value={book} onChange={(e) => setBookName(e.target.value)} />
        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button>{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default TitleForm;
