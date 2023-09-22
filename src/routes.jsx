import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./layout/Index";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
    {
        path: "",
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Landing
            },

        ]
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/contact',
        Component: Contact
    },
]);