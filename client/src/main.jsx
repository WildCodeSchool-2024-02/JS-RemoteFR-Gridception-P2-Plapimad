import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Equipe from "./components/Equipe";
import App from "./App";
import Accueil from "./components/Accueil";


const router = createBrowserRouter([
  {    element: <App />,
  children : [
    {
      path: "/",
      element: <Accueil/>
    },
    
  ]

  },
  {element: <Accueil/>,
  children: [
    {
      path: "Equipe",
      element: <Equipe/>
    }
  ]
},
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
