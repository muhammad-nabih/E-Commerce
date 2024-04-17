import { Categories } from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
function Contact() {
  return (
    <div>
      <Categories />
      <Navbar />
      <div className="h-screen  bg-zinc-200"></div>
      <Footer />
    </div>
  );
}

export default Contact;
