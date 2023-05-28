import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";

const route=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>
    }
])

export default route;
