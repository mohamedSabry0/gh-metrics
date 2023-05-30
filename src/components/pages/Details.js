import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Details</h1>
      <p>{id}</p>
    </div>
  );
};

export default Details;
