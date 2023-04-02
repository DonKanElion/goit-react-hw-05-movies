import imgNotFound from '404.png';
import Button from 'components/Button/Button';
import { SectionDetails } from './GlobalStyles.styled';

const NotFound = () => {
  return (
    <>
      <Button to="/" />
      <SectionDetails>
        <img src={imgNotFound} alt="Not found page" width="50%" />
      </SectionDetails>
    </>
  );
};

export default NotFound;
