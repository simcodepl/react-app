import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Title 1",
    author: "Author 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit quod, distinctio ea sint ab eos vel voluptatum necessitatibus alias, fuga rem earum sunt voluptas doloribus sed cumque. Culpa, nemo?"
  },
  {
    id: 2,
    title: "Title 2",
    author: "Author 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit quod, distinctio ea sint ab eos vel voluptatum necessitatibus alias, fuga rem earum sunt voluptas doloribus sed cumque. Culpa, nemo?"
  },
  {
    id: 3,
    title: "Title 3",
    author: "Author 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit quod, distinctio ea sint ab eos vel voluptatum necessitatibus alias, fuga rem earum sunt voluptas doloribus sed cumque. Culpa, nemo?"
  },
  {
    id: 4,
    title: "Title 4",
    author: "Author 4",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit quod, distinctio ea sint ab eos vel voluptatum necessitatibus alias, fuga rem earum sunt voluptas doloribus sed cumque. Culpa, nemo?"
  },
  {
    id: 5,
    title: "Title 5",
    author: "Author 5",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit quod, distinctio ea sint ab eos vel voluptatum necessitatibus alias, fuga rem earum sunt voluptas doloribus sed cumque. Culpa, nemo?"
  }
];
const HomePage = () => {
  const articleList = articles.map(article => {
    return <Article key={article.id} data={article} />;
  });
  return (
    <>
      <h1>Home Page</h1>
      <section class="articleList">{articleList}</section>
    </>
  );
};

export default HomePage;
