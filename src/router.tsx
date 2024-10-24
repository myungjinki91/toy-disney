import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "characters/:id",
        element: <Detail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
