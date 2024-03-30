import React from "react";

import { connect } from "react-redux";

import "src/Components/Home/MainMovie/MainMovie.scss"

const MainMovie = ({ movie }) => {
    if (!movie.movieList.length) {
        return null;
    }
    const MainMovie = movie.movieList[0];
    const baseImageUrl = ``;

    return (
        <div className="m-mainMovie">
            <img className="m-mainMovie__img" src={baseImageUrl} alt="Movie" />
            <div className="m-mainMovie_desc">
                <h1 className="m-mainMovie__title">{MainMovie.title}</h1>
                <p className="m-mainMovie__story">{MainMovie.overview}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movie: state.movie,
});

export default connect(mapStateToProps)(MainMovie);