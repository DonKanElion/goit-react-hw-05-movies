import SearchForm from 'components/SearchForm/SearchForm';
import MovieDetails from 'pages/MovieDetails';

const Movies = () => {
  const handleSubmit = () => {
    console.log('Helli Submit. on Feath !!!!');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <MovieDetails></MovieDetails>
    </>
  );
};

export default Movies;
