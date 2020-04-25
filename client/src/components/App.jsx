import React from 'react';
import axios from 'axios';
import MovieListEntry from './MovieListEntry';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      directors: [],
      movie_name: '',
      director_name: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  getMovies() {
    axios.get('/api/movies')
      .then((results) => {
        this.setState({ movies: results.data });
      })
      .catch((err) => console.error(err));
  }

  getDirectors() {
    axios.get('api/directors')
      .then((results) => {
        const directors = results.data.map((director) => director.director_name);
        this.setState({ directors });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() { 
    this.getMovies();
    this.getDirectors();
  } 
  
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    const { movie_name, director_name } = this.state;
    const movie = { director_name, movie_name };
    axios.post('/api/movies', movie)
      .then(() => {
        this.getMovies();
        this.getDirectors();
      })
      .catch((err) => console.error(err));
    e.preventDefault();
    e.target.reset();
  }

  deleteHandler(id) {
    axios.delete(`/api/movies/${id}`)
      .then(() => this.getMovies())
      .catch((err) => console.error(err));
  }

  filterHandler(e) {
    const director_name = e.target.value;
    if (director_name === 'none') {
      this.getMovies();
    } else {
      axios.put('/api/movies', { director_name })
        .then((results) => {
          this.setState({ movies: results.data });
        })
        .catch((err) => console.error(err));
    }
  }

  render() {
    const { movies, directors } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <h3>Add New Movie</h3>
        <form onSubmit={this.submitHandler}>
          <label>Movie Name: </label>
          <input type="text" name="movie_name" onChange={this.changeHandler}/>
          <label>Director Name: </label>
          <input type="text" name="director_name" onChange={this.changeHandler}/>
          <input type="submit" value="add"/>
        </form>
        <div>
          Filter by:
          <select onChange={this.filterHandler}>
            <option value="none">select...</option>
            { directors.map((director, index) => (
              <option value={director} key={index}>{director}</option>
            )) }
          </select>
        </div>
        { movies.map((movie, index) => (
          <MovieListEntry movie={movie} key={index} deleteHandler={this.deleteHandler}/>
        )) }
      </div>
    );
  }
}

export default App;