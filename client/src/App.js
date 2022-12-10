import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import './styles.scss'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ComposePage from "./pages/ComposePage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewPost from "./pages/ViewPost";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <ViewPost />,
      },
      {
        path: "/ComposePage",
        element: <ComposePage />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
