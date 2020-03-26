import React from "react";
import "./Article.scss";

const Article = props => {
  const { id, title, author, text } = props.data;
  return (
    <article className="articleListItem">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Article;
