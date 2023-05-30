import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Home from './components/pages/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="forked_repo/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
