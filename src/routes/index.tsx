import NotFound from "@/pages/404";
import Index from "@/pages/Index";
import {  createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "*",
    element: <NotFound />
  }
] , {basename: '/portfolio/'});

export default router;
