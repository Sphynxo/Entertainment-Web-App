import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Bookmarks from "./Pages/Bookmarks";
import { FunctionProvider } from "./FunctionContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/series", element: <Series /> },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FunctionProvider>
      <RouterProvider router={router} />
    </FunctionProvider>
  </StrictMode>
);
