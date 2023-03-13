import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { Coompliments } from "./components/features/compliments"
import { Dashboard } from "./components/features/dashboard"
import { MyCompliments } from "./components/features/mycompliments"
import { TopCompliments } from "./components/features/topcompliments"
import { HomePage } from "./pages/homePage"
import { LoginPage } from "./pages/loginPage"
import { RegisterPage } from "./pages/registerPage"

export const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/homepage" element={<HomePage/>}>
                    <Route path="compliments" element={<Coompliments/>}/>
                    <Route path="mycompliments" element={<MyCompliments/>}/>
                    <Route path="topcompliments" element={<TopCompliments/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}