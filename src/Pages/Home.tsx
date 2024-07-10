import Companies from "../Components/Companies"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Container from "../Components/Container"
// import JoinUs from "../Components/JoinUs"
// import Benefits from "../Components/Benefits"
// import { benefitOne, benefitTwo } from "../utils/data"
import Footer from "../Components/Footer"
import Featured from "../Components/Featured"
import UsersList from "../features/Users/usersList"
import RegisterUser from "../features/Register/register"
import { ToastContainer } from "react-toastify"


const Home = () => {
  return (
    <div>
      <Container className="bg-base-200 flex flex-col gap-6">
        <Navbar />
        <Hero />
        <ToastContainer />
        <RegisterUser />
        <Companies />
        <Featured />
        <UsersList />
        {/* <JoinUs /> */}
        {/* <Benefits data={benefitOne} /> */}
        {/* <Benefits imgPos="right" data={benefitTwo} /> */}
        <Footer />
      </Container>
    </div>
  )
}

export default Home