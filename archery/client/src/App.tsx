import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Root } from "./pages/Root";
import { SelectedNode } from "./pages/SelectedNode";
import { About } from "./pages/About";
import { Error } from "./components/Error";
import { PostReports } from "./components/PostReports";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Root />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path=":id" element={<SelectedNode />}></Route>
        <Route path="post_reports/:id" element={<PostReports />}></Route>
        <Route path="unexpected_error" element={<Error />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
