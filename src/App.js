import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="repo_details/:owner" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
