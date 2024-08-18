import RootLayout from "./RootLayout/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/notes"} element={<Notes />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"*"} element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
