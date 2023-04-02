import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { SectionDetails } from 'pages/GlobalStyles.styled';
import { getMoviesReviews } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  let id = movieId.slice(1);

  useEffect(() => {
    setIsLoading(true);

    getMoviesReviews(id)
      .then(res => {
        if (res.length === 0) {
          return Notify.warning("We don’t have any reviews for this movie.");
        }
        setReviews([...res]);
      })
      .catch(error => {
        console.log('Catch ERROR: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <SectionDetails>
      <h3>Reviews:</h3>

      {!isLoading ? (
        reviews.length === 0 ? (
          <p>We don’t have any reviews for this movie.</p>
        ) : (
          <ul>
            {reviews.map(e => {
              const { id, author, content } = e;
              return (
                <li key={id}>
                  <h4>Author: {author}</h4>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        )
      ) : null}
    </SectionDetails>
  );
};

export default Reviews;
