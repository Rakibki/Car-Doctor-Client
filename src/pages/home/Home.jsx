import Navber from "../../shared/Navber";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Help from "./Help";
import Products from "./Products";
import Choose from "./Choose";
import OurTeam from "./OurTeam";
import Customer from "./Customer";
import Footer from "../../shared/Footer";

const Home = () => {

  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Help />
      <Products />
      <OurTeam />
      <Choose />
      <Customer />
    </div>
  );
};

export default Home;
