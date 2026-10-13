import SeriesDetails from './containers/SeriesDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Series from './containers/Series';
import Movies from './containers/Movies';
import MovieDetails from './containers/MovieDetails';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
