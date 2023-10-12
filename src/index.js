import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import context
import { ContextWrapper } from "./Context/AppContext";
// import routes
import Home from "./Views/home";
import ContactMe from "./Components/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "contact-me",
        element: <ContactMe />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not found!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextWrapper>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
