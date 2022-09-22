import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import { FiClock } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { getApi } from "../../utils/httpClient";


import {
  ContainerDetails,
  ContainerLargeImg,
  ContainerTextDetails,
  Genres,
  ImgDetails,
  Overview,
  ExtraDetails,
  Runtime,
  Title,
} from "./styled";
import Spinner from "../spinner/Spinner";

const CardDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    setIsLoading(true);

    getApi("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);
  console.log("movie =>", movie);

  if (isLoading) {
    return <Spinner/>
  }
 
  if(!movie) {return null}

  const img = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
  const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <>
      <Nav />
 
      <ContainerLargeImg  style={{backgroundImage: `url(${img})`}} >
        <ContainerDetails>
          <ImgDetails src={imgUrl} alt={movie.title} />
          <ContainerTextDetails>
            <Title>
              {`${movie.title} ( ${Number(movie?.release_date?.slice(0, 4))} )`}
            </Title>

            <Overview>{movie.overview}</Overview>
            <ExtraDetails>
              <Genres>
                <BiCameraMovie size={30} />{" "}
                {movie.genres?.map((genre) => genre.name).join(", ")}
              </Genres>
              <Runtime>
                <FiClock size={30} /> {`${movie.runtime} min`}
              </Runtime>
            </ExtraDetails>
          </ContainerTextDetails>
        </ContainerDetails>
      </ContainerLargeImg>
   
    </>
  );
};

export default CardDetails;
