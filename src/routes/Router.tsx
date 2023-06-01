import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "../UI/pages";
import Repository from "../UI/pages/Repository/Repository";

const router = createBrowserRouter([
    {
        path: '/', // Main page Layout
        element: <Homepage />
    },
    {
        path: '/repository',
        element: <Repository />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}