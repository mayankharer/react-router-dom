import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  NavLink,
  RouterProvider,
  Outlet,
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/*Below Routes works like parent component for multiple routes*/}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
