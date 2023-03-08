import SearchForm from 'components/SearchForm/SearchForm';

const PageMovies = () => {


    const handleSubmit = () => {
        console.log('Helli Submit. on Feath !!!!')
    }

  return (
    <>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
    </>
  );
};

export default PageMovies;
