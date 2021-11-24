import React from "react"; 

const Titles = (props) => {
  const { titles } = props;
  return (
    // wrote this code to be able to style in CSS
    <div style={styles.container}>
      <h1>Titles</h1>
      {/* {titles.map((title) => (
        <Title key={title.id} {...title}
      ))} */}

    </div>
  )
}
export default Titles
