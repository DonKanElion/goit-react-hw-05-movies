import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <Container>
        <Header>
          <nav>
            <Link to="/" end >Home</Link>
            <Link to="/search/search-movies">Movies</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    )
};

export default SharedLayout;