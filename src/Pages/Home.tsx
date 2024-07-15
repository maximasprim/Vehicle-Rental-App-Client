import Companies from "../Components/Companies"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Container from "../Components/Container"
// import JoinUs from "../Components/JoinUs"
// import Benefits from "../Components/Benefits"
// import { benefitOne, benefitTwo } from "../utils/data"
import Footer from "../Components/Footer"
import Featured from "../Components/Featured"
import RegisterUser from "../features/Register/register"
import { ToastContainer } from "react-toastify"
import About from '../Components/about'


const Home = () => {
  return (
    <div>
      <Container className="bg-base-200 flex flex-col">
        <Navbar />
        <Hero />
        <ToastContainer />
        <RegisterUser />
        <Companies />
        <Featured />
        <About />
        <Footer />
      </Container>
    </div>
  )
}

export default Home