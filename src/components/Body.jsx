import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body