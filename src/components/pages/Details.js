import {
  useDispatch,
  useSelector,
}
  from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import fetchDetails from '../../redux/details/detailsThunk';

const Details = () => {
  const { owner } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(`https://api.github.com/repos/${owner}/freeCodeCamp`));
  }, [dispatch, owner]);

  const { details, status } = useSelector((state) => state.details);

  if (details.message) {
    return (<p className="error-message">{`API Error: ${details.message}`}</p>);
  }
  if (status === 'succeeded') {
    return (
      <div>
        {details && (
        <div className="details-container">

          <figure className="row-container bld-up">
            <img className="owner-avatar" src={details.owner.avatar_url} alt={details.owner.login} />
            <figcaption className="owner-name">
              Owner GH Handle:
              <a href={details.owner.html_url}>
                {` @${details.owner.login}`}
              </a>
            </figcaption>
          </figure>

          <p className="row-container">
            Repository description:
            {' '}
            {details.description}
          </p>
          <p className="row-container">
            <strong>Stars:</strong>
            {' '}
            {details.stargazers_count}
          </p>
          <p className="row-container">
            <strong>Forks:</strong>
            {' '}
            {details.forks_count}
          </p>
          <p className="row-container">
            <strong>GitHub Link:</strong>
            {' '}
            <a href={details.html_url}>{details.html_url}</a>
          </p>
        </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Details;
