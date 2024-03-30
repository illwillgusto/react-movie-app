import React from "react";

import { Connect } from "react-import { connect } from 'react-redux'";
import { changeMovieFilterType } from "../../../store/movies/actions";
import "../MovieFilter/MovieFilter.scss";

import { filterTypes } from "../../../utils";

const MovieFilter = (props) => {
    const filterButtons = filterTypes.map((btn) => {
        let classes = "m-movieFilter__btn";

        if (btn.filterTypes === props.movies.filterTypes) {
            classes += "-active";
        }

        return (
            <button 
             className={classes}
             key={btn.id}
             data-filter-type={btn.filterTypes}
             onClick={(e) => props.changeMovieFilterType(e.target.dataset.filterType)}></button>
        )
    })
}