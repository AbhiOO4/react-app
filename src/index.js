import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Fitness from "./pages/Fitness";
import Nutrition from "./pages/Nutrition";
import About from "./pages/About";
import Pwr from "./pages/Pwr";
import Calculater from "./pages/Calculater"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([

  {
    path: "Fitness",
    element: <Fitness/>,
  },
  {
    path: "/Signup",
    element: <SignUpPage/>,
  },
  {
    path: "/Login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Nutrition",
    element: <Nutrition/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Personalised-workout-routine",
    element: <Pwr/>,
  },
  {
    path: "Calculate-calories",
    element: <Calculater/>,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
