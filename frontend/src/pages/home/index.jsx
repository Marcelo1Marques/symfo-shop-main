import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import axios from "axios";

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
      <p className="bg-green-800">sdqsdqsd</p>
      <h2 className="bg-red-900 italic uppercase font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sit quam ipsa doloribus sed corporis harum repellendus dolorum ullam recusandae, veniam dicta voluptatibus iusto blanditiis, similique ut id quod veritatis!</h2>
      <button>
        <a href="/logout"> Disconnect</a> 
      </button>
    </>
  );
};