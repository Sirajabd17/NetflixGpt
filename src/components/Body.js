import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

/*

import {createBrowserRouter,RouterProvider} from React-router-dom
import Login from "./Login",
import Browse from "./Browse"
const Body =()=>{
  const appRouter=createBrowserRouter({[
    {
      path:"/",
      element:Login,
    },
    {
        path:"/brower",
        element:brower,

    }
  ]})
    return (
      <div> RouterProvider router={appRouter} <div/> 
    )
} 
export default Body

*/
