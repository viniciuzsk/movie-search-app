import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Profile from './assets/components/Profile';
import FilmDetails from './assets/pages/FilmDetails';
import Home from './assets/pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<FilmDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
