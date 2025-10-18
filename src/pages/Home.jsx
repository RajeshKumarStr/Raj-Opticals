import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import GallerySection from "./GallerySection.jsx"
import Contact from "./Contact.jsx";
import ChatButton from "../components/ChatButton.jsx";
import Footer from "./Footer.jsx";

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    Home: heroRef,
    "About Us": aboutRef,
    Services: servicesRef,
    Gallery: galleryRef,
    Contact: contactRef,
  };

  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={heroRef} className="scroll-mt-24">
        <Hero galleryRef={galleryRef} />
      </div>
      <div ref={aboutRef} className="scroll-mt-24"><About /></div>
      <div ref={servicesRef} className="scroll-mt-24"><Services /></div>
      <div ref={galleryRef} className="scroll-mt-24"><GallerySection /></div>
      <div ref={contactRef} className="scroll-mt-24"><Contact /></div>
      <Footer />

      <ChatButton />
    </div>
  );
}

export default Home;