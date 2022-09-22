import React from "react";
import { Link } from "react-router-dom";
import { Img, Title, ContainerCard } from "./styles";


const Card = ({ movie }) => {
 

  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <>
    <Link to={"/movies/" + movie.id}>
    <ContainerCard>
      <Img src={imgUrl} alt={movie.title} />
      <Title>{movie.title}</Title>
    </ContainerCard>
      </Link>
    </>
  );
};

export default Card;
