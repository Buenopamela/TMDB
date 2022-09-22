import React, { useEffect, useState } from "react";
import { getApi } from "../../utils/httpClient";
import Card from "../card/Card";
import { ContainerMovies } from "./styles";

const Grid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getApi("/discover/movie")
      .then((data) => {
      setMovies(data.results);
      console.log("data =>", data.results)
    });
  }, []);
  
  return (
    <ContainerMovies>
      {movies?.map((movie) => (
        <Card key={movie.id} movie={movie}></Card>
      ))}
    </ContainerMovies>
  );
};

export default Grid;
