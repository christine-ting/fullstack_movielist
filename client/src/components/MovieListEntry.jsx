import React from 'react';

const MovieListEntry = ({ movie, deleteHandler }) => {
  const { id, movie_name, director_name } = movie;
  return (
    <div>
      <h3>{movie_name}&nbsp;directed by: {director_name}</h3>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
};

export default MovieListEntry;