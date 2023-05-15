import {Routes, Route, Link} from 'react-router-dom';
import {Suspense} from 'react';
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';

const App = () => {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;