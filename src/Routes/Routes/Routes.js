import Main from "../../Layout/Main";
import Test from "../../Layout/Test";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            { path: '/appointment', element: <Appointment></Appointment>},
            
    ]}
])