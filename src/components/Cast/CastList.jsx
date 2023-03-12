import PropTypes from 'prop-types';
import { ListItem, Item, PhotoBox, Photo } from './CastList.styles';
import defaultPhoto from '../../default_photo.png';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

const CastList = ({ cast }) => {
  return (
    <ListItem>
      {cast.map(e => {
        const { id, profile_path, name, character } = e;

        const checkImg = profile_path ? (`${BASE_IMG_URL}w300${profile_path}`) : (defaultPhoto);

        return (
          <Item key={id}>
            <PhotoBox>
            <Photo
              src={checkImg}
              alt={name}
            />
            </PhotoBox>
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </Item>
        );
      })}
    </ListItem>
  );
};

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};
export default CastList;
