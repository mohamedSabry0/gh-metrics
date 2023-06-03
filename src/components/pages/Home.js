import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchRepos from '../../redux/repositories/repositoriesThunk';
import { filterRepos } from '../../redux/repositories/repositoriesSlice';
import githubLogo from '../../assets/211904_social_github_icon.svg';
import FCCLogo from '../../assets/4691243_freecodecamp_icon.svg';

const Home = () => {
  let repos = useSelector((state) => state.repos.repos);
  const filteredRepos = useSelector((state) => state.repos.filteredRepos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);
  if (filteredRepos.length > 0) {
    repos = filteredRepos;
  }
  /* in order to recreate the alternating
  background color, I'll split the repos array in two parts and
  render them in two different ul elements.
  there should be a better way to do this, but I'll tinker with it later
  TODO: find a better way to render alternating background color between two columns
  */

  const repos1 = repos.slice(0, repos.length / 2);
  const repos2 = repos.slice(repos.length / 2, repos.length);

  const reposList = (list, num) => (
    <ul className={`repos${num}-list`}>
      {list && list.map(({
        id, owner, forks,
      }) => (
        <li key={id} className="repo-card bld-up ">
          <Link
            className="details-link"
            to={`/repo_details/${owner}`}
          >
            <img className="repo-logo" src={FCCLogo} alt="freeCodeCamp logo" />
            <p className="count">
              Fork Count:
              {' '}
              {forks}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="home-header bld-up">
        <img className="home-img" src={githubLogo} alt="github logo" />
        <h1 className="title">
          freeCodeCamp
          <br />
          forked repositories
        </h1>
      </header>
      <div className="filter-container">
        <input
          className="filter-input ctrl-font"
          type="text"
          placeholder="Filter by fork count..."
          onChange={(e) => {
            dispatch(filterRepos(e.target.value));
          }}
        />
      </div>
      <section className="lists-container">
        {reposList(repos1, 1)}
        {reposList(repos2, 2)}
      </section>
    </>
  );
};

// export the component
export default Home;
