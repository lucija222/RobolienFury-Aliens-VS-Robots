import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Arena from "./pages/Arena";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "arena",
        element: <Arena />,
    },
]);
