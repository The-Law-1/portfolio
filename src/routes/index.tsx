import Index from "@/pages/Index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
]);

export default router;