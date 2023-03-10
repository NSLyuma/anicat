import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './routes/App';
import ErrorPage from './error-page';
import Cats from './routes/Cats';
import Anime from './routes/Anime';
import AnimeQuiz from './routes/AnimeQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: '/cats', element: <Cats /> },
  { path: '/anime', element: <Anime /> },
  { path: '/game', element: <AnimeQuiz /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
