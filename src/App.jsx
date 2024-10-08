import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layouts
import Layout from "./components/Layout";
// Pages
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<HomePage />} loader={async () => null} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="*" element={<NotFound />} loader={async () => null} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
