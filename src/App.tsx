import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, RecommendationsPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recommendations",
    element: <RecommendationsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
