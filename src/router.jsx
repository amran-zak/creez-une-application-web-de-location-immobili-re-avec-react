import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accommodation from "./pages/Accommodation/Accommodation";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/a-propos", element: <About /> },
      { path: "/logement/:id", element: <Accommodation /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
