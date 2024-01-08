import IndexPage from '../Component'
import Comment from '../Component/Comment';
import UserTable from '../Component/UserTable';
import Menu from '../Component/Menu';
const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path:"/*",
        element:<IndexPage/>,
        children:[
            {
                path:'menu',
                element:<Menu/>
            },
            {
                path:'comment',
                element:<Comment/>
            },
            {
                path:'user',
                element:<UserTable/>
            },
            {
                path:"login",
                element:<IndexPage/>
            },
            {
                path:"index",
                element:<IndexPage/>
            },
        ]
    },

   
])
export default router;