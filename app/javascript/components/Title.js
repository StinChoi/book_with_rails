import React from "react";
import TitleForm from "./TitleForm";

const Title = (props) => {
  // changed category to book
  const { title, author, book, deleteTitle, updateTitle } =
    props;
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <p>author: {author}</p>
      <p>book: {book}</p>
      <hr />
      {/* Code Breaks here */}
      <TitleForm {...props} />
      {/* book={title}
        author={author}
      // category={category}
      />
      <hr /> */}
      <button onClick={() => deleteTitle(id)}>Delete Book Title</button>
    </div>
  );
};

export default Title;

const styles = {
  container: {
    border: "3px solid green",
    margin: "10px",
    padding: "10px",
  },
};