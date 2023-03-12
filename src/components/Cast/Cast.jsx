import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SectionDetails } from 'pages/GlobalStyles.styled';
import { getMoviesCast } from 'services/moviesAPI';
import CastList from './CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const id = movieId.slice(1);

  useEffect(() => {
    getMoviesCast(id)
      .then(res => {
        console.log(res);

        setCast([...res]);
        console.log('Cast: ', cast);
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  }, [id]);
  return (
    <SectionDetails>
      <h3> Cast інформація про акторів</h3>
      <CastList cast={cast}></CastList>
    </SectionDetails>
  );
};

export default Cast;
