import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchRepos from '../../redux/repositories/repositoriesThunk';

const Home = () => {
  const repos = useSelector((state) => state.repos.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <ul className="repos-list">
      {repos && repos.map(({
        id, owner, stars, forks,
      }) => (
        <li key={id} className="repo-card">
          <Link
            to={`/repo_details/${owner}`}
          >
            <h1>
              {owner}
              {' '}
              Fork
            </h1>
            <p>
              Stars Count:
              {stars}
            </p>
            <p>
              Fork Count:
              {forks}
            </p>
          </Link>

        </li>
      ))}
    </ul>
  );
};

// export the component
export default Home;
