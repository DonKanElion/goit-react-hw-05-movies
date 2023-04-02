import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { SectionDetails } from 'pages/GlobalStyles.styled';
import { getMoviesCast } from 'services/moviesAPI';
import CastList from './CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const id = movieId.slice(1);

  useEffect(() => {
    setIsLoading(true);
    getMoviesCast(id)
      .then(res => {
        if (res.length === 0) {
          return Notify.warning('We don’t have any cast for this movie.');
        }
        return setCast([...res]);
      })
      .catch(error => {
        console.log('ERROR: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <SectionDetails>
      <h3> Cast</h3>
      {isLoading ? (
        cast.length === 0 ? (
          <p>We don’t have any cast for this movie.</p>
        ) : (
          <CastList cast={cast}></CastList>
        )
      ) : null}
    </SectionDetails>
  );
};

export default Cast;
