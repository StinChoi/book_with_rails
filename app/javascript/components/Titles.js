import React from "react";
import Title from "./Title";

const Titles = (props) => {
  const { titles, updateTitle, deleteTitle } = props;
  return (
    // wrote this code to be able to style in CSS
    <div style={styles.container}>
      <h1>Titles</h1>
      {titles.map((title) => (
        <Title
          key={title.id}
          {...title}
          updateTitle={updateTitle}
          deleteTitle={deleteTitle}
        />
      ))}
    </div>
  );
};

export default Titles;

const styles = {
  container: {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  },
};