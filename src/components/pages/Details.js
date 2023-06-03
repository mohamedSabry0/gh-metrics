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
  console.log(details);

  if (details.message) {
    return (<p>{`API Error: ${details.message}`}</p>);
  }
  if (status === 'succeeded') {
    return (
      <div>
        {details && (
        <div>
          <h1>{details.full_name}</h1>
          <p>
            Repository description:
            {' '}
            {details.description}
          </p>

          <figure>
            <img src={details.owner.avatar_url} alt={details.owner.login} />
            <figcaption>
              <a href={details.owner.html_url}>
                {`Owner GH Handle: @
        ${details.owner.login}`}
              </a>
            </figcaption>
          </figure>
          {/*
      */}
          <p>
            <strong>Stars:</strong>
            {' '}
            {details.stargazers_count}
          </p>
          <p>
            <strong>Forks:</strong>
            {' '}
            {details.forks_count}
          </p>
          <p>
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
