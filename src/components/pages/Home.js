import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchRepos from '../../redux/repositories/repositoriesThunk';

const Home = () => {
  const repos = useSelector((state) => state.repos.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (repos.length === 0) {
      dispatch(fetchRepos());
    }
  }, [dispatch, repos.length]);

  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <Link
            to={`/repo_details/${repo.owner}`}
          >
            <h1>
              {repo.owner}
              {' '}
              Fork
            </h1>
            <p>
              Stars Count:
              {repo.stars}
            </p>
            <p>
              Fork Count:
              {repo.forks}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

// export the component
export default Home;
