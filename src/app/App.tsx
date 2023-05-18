import {Routes, Route, Link} from 'react-router-dom';
import {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;