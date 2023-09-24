import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Route";

export const GlobalContex = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContex.Provider value={true}>
      <RouterProvider router={router} />
    </GlobalContex.Provider>
  </React.StrictMode>
);
