"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Navbar from "./Navbar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const data = await axios.post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      });
      console.log(data.data);
      setMovies(data.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDate = (time) => {
    const releasedDate = 1617218999;
    const date = new Date(releasedDate * 1000);

    if (!isNaN(date.getTime())) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDate = `${day.toString().padStart(2, "0")}/${month
        .toString()
        .padStart(2, "0")}/${year}`;

      return formattedDate;
    } else {
      return null;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" py-20 font-montserrat container">
        <h2 className="font-semibold text-3xl">Movies List</h2>
        <div className="flex flex-wrap gap-2 py-10">
          {movies.length === 0 ? (
            <div className=" text-xl w-full font-semibold text-center">
              Loading...
            </div>
          ) : (
            movies?.map((movie, idx) => {
              return (
                <div
                  key={movie._id || idx}
                  className="flex w-[25rem] movieCard gap-2 shadow-md"
                >
                  <HOCVotes item={movie?.voted?.length} />
                  <div className="overflow-hidden group">
                    <img
                      className="group-hover:scale-105 transition-all duration-300 ease-in-out posterImage h-full"
                      src={movie?.poster}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="font-medium">{movie?.title}</div>
                    <div className="movieTexts text-sm">
                      Genre:{" "}
                      <span className="truncate font-medium">
                        {" "}
                        {movie?.genre}
                      </span>
                    </div>
                    <div className="movieTexts text-sm">
                      Director:{" "}
                      <span className="truncate font-medium">
                        {movie?.director}
                      </span>
                    </div>
                    <div className="movieTexts text-sm">
                      Starring:{" "}
                      <span className="truncate font-medium">
                        {movie?.stars}
                      </span>
                    </div>
                    <div className="text-sm">
                      {movie?.runtime && (
                        <>
                          <span className="font-medium">
                            {movie.runtime}mins
                          </span>{" "}
                          <span className="w-4 h-10 bg-gray-700"></span>
                        </>
                      )}{" "}
                      {movie?.language && (
                        <>
                          <span className="font-medium">{movie.language}</span>{" "}
                          <span className="border-r border-gray-700 h-10"></span>{" "}
                        </>
                      )}
                      {movie?.releasedDate && (
                        <span className="font-medium pl-1">{getDate()}</span>
                      )}
                    </div>
                    <button className="watchBtn w-full py-2 hover:tracking-wide transition-all duration-300 ease-in-out">
                      Watch Trailer
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export const HOCVotes = ({ item }) => {
  const [votes, setVotes] = useState(item);
  const [current, setCurrent] = useState(null);
  //   const upvoteRef = useRef();
  //   const downvoteRef = useRef();

  const increaseVote = () => {
    setVotes((prev) => prev + 1);
  };

  const decreaseVote = () => {
    setVotes((prev) => prev - 1);
  };

  return (
    <div
      className={`bg-gray-100 px-4 flex flex-col items-center justify-center`}
    >
      <IoMdArrowDropupCircle
        onClick={increaseVote}
        className={`text-2xl ${
          current == "upvote" &&
          "disabled disabled:opacity-85 cursor-not-allowed "
        }cursor-pointer`}
      />
      <div>{votes}</div>
      <IoMdArrowDropdownCircle
        onClick={decreaseVote}
        className={`text-2xl ${
          current == "upvote" &&
          "disabled disabled:opacity-85 cursor-not-allowed "
        }cursor-pointer`}
      />
      <div>Votes</div>
    </div>
  );
};
export default Home;
