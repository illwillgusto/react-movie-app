import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getMovies } from "../../store/movies/actions";
import MovieCard from "../../Components/Home/MovieCard/MovieCard";
import MovieFilter from "../../Components/Home/MovieFilter/MovieFilter";

import "./Home.scss";
