import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './pages/App';
import Quiz from './pages/quiz';
import Zdjecie from './pages/zdjecie';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';


const router= createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/quiz",
    element:<Quiz></Quiz>
  },
  {
    path:"/zdjecie",
    element:<Zdjecie></Zdjecie>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}>
    </RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
