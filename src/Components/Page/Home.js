import React, { useState } from 'react';
import { moviesData } from '../MoviesData';
import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';

const Home = () => {
    const [moviesList, setMoviesList] = useState(moviesData);
    const [nameSearch, setNameSearch] = useState('');
    const [ratingSearch, setRatingSearch] = useState(1);
  
    const addNewMovie = (e, newMovie) => {
      e.preventDefault();
      setMoviesList([...moviesList, newMovie]);
    };
    return (
        <div>
            <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
        </div>
    )
}

export default Home
