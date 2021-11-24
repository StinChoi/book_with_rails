import React from "react";

const Title = (props) => {
  const { book_name, author, genre, id, updateTitle, deleteTitle } =
    props;
  return (
    <div style={styles.container}>
      <h1>{book_name}</h1>
      <p>author: {author}</p>
      <p>genre: {genre}</p>
      <p>id: {id}</p>
      <hr />
      {/* <TitleForm */}
      <hr />
      <button onClick={() => deleteTitle(id)}>Delete Book Title</button>
    </div>
  );
};

export default Title;

const styles = {
  container: {
    border: "1px solid blue",
    margin: "10px",
    padding: "10px",
  },
};