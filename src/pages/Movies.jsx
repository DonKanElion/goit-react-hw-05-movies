import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {


    const handleSubmit = () => {
        console.log('Helli Submit. on Feath !!!!')
    }

  return (
    <>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
    </>
  );
};

export default Movies;
