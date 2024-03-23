import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import List from "./Pages/List";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/list", element: <List /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />} />
      <Route path="/list" element={<List />} />
      <Route path="/contact" element={<Contact />} />
    </>
  );

  const router1 = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
