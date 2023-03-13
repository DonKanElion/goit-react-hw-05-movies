import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import SearchForm from './SearchForm/SearchForm';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<SearchForm />}></Route>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
