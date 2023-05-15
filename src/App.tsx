import {Routes, Route, Link} from 'react-router-dom';
import {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {Theme, ThemeContext} from './theme/ThemeContext';
import {useTheme} from './theme/useTheme';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
      </ul>

      <button onClick={toggleTheme}>Toggle theme</button>
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