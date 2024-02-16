import Index from "@/pages/Index";
import {  createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Index/>,
  },
  // 404 page!
]);

export default router;