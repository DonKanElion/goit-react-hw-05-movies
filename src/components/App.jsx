import { Header } from './Header/Header';
import Home from './Home/Home';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 20px 40px;
  background: #ffffff;
`;

export const App = () => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Home></Home>
      </Wrapper>
    </>
  );
};
