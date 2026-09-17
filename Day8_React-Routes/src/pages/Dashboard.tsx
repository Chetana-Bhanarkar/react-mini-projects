import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet/>
        </>
    )
};


export default Dashboard;