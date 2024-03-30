import React from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "";
import { genres } from "../../../utils";

import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
    const baseImageUrl = ``;

    return (
        <div className="m-movieCard">
            <NavLink className="m-movieCard__navLink" to={`/movie/${movie.id}`}>
                <div className="m-movieCard__header">
                    <img className="m-movieCard__img" 
                    src={baseImageUrl} 
                    alt={movie.title} />
                </div>
                <div className="m-movieCard__body">
                    <div className="m-movieCard__point">
                        <FontAwesomeIcon className="m-movieCard_point" icon={faStar} />

                        {movie.vote_average}
                    </div>

                    <h3 className="m-movieCard__title">
                        {movie.title.length > 20 
                        ? movie.title.slice(0,20) + "..."
                        : movie.title}
                    </h3>

                    <div className="m-movieCard__genreList">
                        {movie.genre_ids.map((genreId) => (
                            <div className="m-movieCard__genre" key={genreId}>
                                {genres[genreId]}
                            </div>
                        ))}
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default MovieCard;