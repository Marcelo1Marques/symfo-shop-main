import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";
import Navbar from "../../components/navbar/index"

const URL = "https://jsonplaceholder.typicode.com/posts/";


export const Home = () => {
  const [posts, getAllPosts] = useState([]);
  const [postsSymfony, getAllPostsSymfony] = useState([]);

  const getPostsSymfony = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getAllPostsSymfony(response.data["hydra:member"]);
      })
      .catch((error) => {
        error;
      });
  };

  const getPosts = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getAllPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPostsSymfony();
    getPosts();
    // console.log(window.user);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};