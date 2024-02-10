import logo from "./logo.svg";
import "./App.css";
import "@fontsource/dm-sans"; // Defaults to weight 400
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Voice from "./Pages/Voice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/voice" element={<Voice />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
