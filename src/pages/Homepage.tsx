import HeroSection from "@/components/modules/HomePage/HeroSection";
import About from "./About";
import ServiceHighlights from "@/components/modules/HomePage/ServiceHighlights";
import Testimonials from "@/components/modules/HomePage/Testimonials";
import CallToAction from "@/components/modules/HomePage/CallToAction";





const Homepage = () => {
    return (
        <div className="">
          
           <HeroSection></HeroSection>
           <ServiceHighlights />
           <Testimonials />
           <About></About>
           <CallToAction /> 
          
        
        </div>
    );
};

export default Homepage;