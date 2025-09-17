
import Contact from "@/components/modules/HomePage/Contact";
import Features from "@/components/modules/HomePage/Features";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import About from "./About";
import FAQ from "@/components/modules/HomePage/FAQ";




const Homepage = () => {
    return (
        <div className="">
          
           <HeroSection></HeroSection>
           <Features></Features>
           <About></About>
           <Contact></Contact>
           <FAQ></FAQ>
        
        </div>
    );
};

export default Homepage;