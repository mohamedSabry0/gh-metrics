import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchRepos from '../../redux/repositories/repositoriesThunk';
import '../../styles/Home.scss';

// here a component called Home is created
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
        <Link key={repo.name} to={`/repo_details/${repo.id}`}>
          <div className="repo-card">
            <h2>{repo.name}</h2>
            <p>
              Stars Count:
              {repo.stars}
            </p>
            <p>
              Fork Count:
              {repo.forks}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

// export the component
export default Home;
