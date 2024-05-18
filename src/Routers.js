import Home from "./Pages/Home/Home"
import Add from "./Pages/Add/Add"
import Delete from "./Pages/Delete/Delete"




export const Router = [
    { path: '/*', element: <Home /> },
    { path: '/Add', element: <Add /> },
    { path: '/Delete', element: <Delete /> },
]


