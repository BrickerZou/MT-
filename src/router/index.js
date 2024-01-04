import IndexPage from '../Component'
const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path:"/*",
        element:<IndexPage/>
    },
    {
        path:"login",
        element:<IndexPage/>
    },
    {
        path:"index",
        element:<IndexPage/>
    }
])
export default router;