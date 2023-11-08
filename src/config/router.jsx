import Home from "../pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])
const RouterComponent = () => {
    <RouterProvider router={router} />
}
export default RouterComponent