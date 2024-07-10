import Layout from "./UserDashboard/Layout";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Dashboard() {
    return (
        <div className="h-screen">
            <Navbar />
            <Layout />
            <Footer />
        </div>

    );
}  