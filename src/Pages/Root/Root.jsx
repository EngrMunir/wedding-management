import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Reservations from "../Reservations/Reservations";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Reservations></Reservations>
           <Footer></Footer>
        </div>
    );
};

export default Root;