
import { useRoutes, Router} from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";

import { RegisterPage } from "../pages/registerPage";
export const MainRoutes = ()=>{
    return useRoutes([
        {path:'/login', element: <LoginPage/> },
        {path:'/register', element: <RegisterPage/>},
        {path: '/homepage', children:[
            {path:'/comments', element: <div><h1>jhsajkjhasgjdh</h1></div>}
        ]}
    ])
};
