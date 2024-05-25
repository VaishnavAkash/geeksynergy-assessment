"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    const data = axios.post("");
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className=" py-20 font-montserrat container">
      <h2 className="font-semibold text-3xl">Movies List</h2>
      <div>{}</div>
    </div>
  );
};

export default Home;
