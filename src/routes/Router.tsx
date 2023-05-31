import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "../UI/pages";

const router = createBrowserRouter([
    {
        path: '/', // Main page Layout
        element: <p>Hii</p>
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}