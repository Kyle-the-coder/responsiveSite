import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { landingRoute } from "./pages/LandingPages/LandingPageMain";
import { aboutUsRoute } from "./pages/AboutUsPages/AboutUsMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/aboutUs", ...aboutUsRoute },
    ],
  },
]);
