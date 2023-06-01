import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Homepage = lazy(() => import('../UI/pages/Homepage/Homepage'));
const Repository = lazy(() => import('../UI/pages/Repository/Repository'));

const router = createBrowserRouter([
    {
        path: '/', // Main page Layout
        element: <Suspense fallback={<p>loading</p>}><Homepage /></Suspense>
    },
    {
        path: '/repository',
        element: <Suspense fallback={<p>loading</p>}><Repository /></Suspense>
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}