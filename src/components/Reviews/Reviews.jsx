import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SectionDetails } from 'pages/GlobalStyles.styled';
import { getMoviesReviews } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  let id = movieId.slice(1);

  useEffect(() => {
    getMoviesReviews(id)
      .then(res => {
        setReviews([...res]);
      })
      .catch(error => {
        console.log('Catch ERROR: ', error);
      });
  }, [id]);

  console.log(reviews);

  return (
    <SectionDetails>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(e => {
          const { id, author, content } = e;

          return (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          )
        })}
      </ul>
    </SectionDetails>
  );
};

export default Reviews;
