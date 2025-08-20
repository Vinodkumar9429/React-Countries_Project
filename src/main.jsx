import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryPage from "./components/CountryPage.jsx";
import App from "./App";
import Home from "./components/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "contact",
//         element: <h1>This is the contact page.</h1>,
//       },
//       {
//         path: "/:country",
//         element: <CountryPage />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
