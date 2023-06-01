import { useEffect } from "react";
import MovieCard from "./MovieCard";
import React from "react";
import "./App.css";
import SearchIcon from "./search.png";

const API_URL = "http://www.omdbapi.com?apikey=6a4a64f3";
const movie1 = {
  Poster: "N/A",
  Title: "Spiderman",
  Type: "movie",
  Year: "2010",
  imdbID: "tt1785572",
};

const App = () => {
  // async means that it will take time to load info
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
};

export default App;
