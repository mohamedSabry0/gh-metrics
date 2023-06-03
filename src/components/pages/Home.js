import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchRepos from '../../redux/repositories/repositoriesThunk';
import { filterRepos } from '../../redux/repositories/repositoriesSlice';

const Home = () => {
  const filteredRepos = useSelector((state) => state.repos.filteredRepos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
    dispatch(filterRepos(0));
  }, [dispatch]);

  return (
    <>
      <input
        className="filter-input"
        type="text"
        placeholder="filter by fork count..."
        onChange={(e) => {
          dispatch(filterRepos(e.target.value));
        }}
      />

      <ul className="repos-list">
        {filteredRepos && filteredRepos.map(({
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
    </>
  );
};

// export the component
export default Home;
