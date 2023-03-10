import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#1a68c7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
