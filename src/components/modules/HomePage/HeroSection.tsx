
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";



const HeroSection = () => {
    return (
        <section>
            <div className="container mx-auto mt-1">
                <div className="bg-muted grid items-center gap-8 lg:grid-cols-2 rounded-lg">
                    <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
                        <Logo></Logo>
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            Get There, Your Way.
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            Fast, safe, and affordable rides — whenever and wherever you need them. Join millions who ride with us every day.
                        </p>

                        <p className="text-lg sm:text-xl mb-8">
                            Book a ride in seconds, track your driver in real-time, and enjoy a safe and seamless journey with our trusted drivers.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition">
                                <Link to="rider">Book a Ride</Link>
                            </button>
                           
                        </div>

                    </div >

                    <img
                        src="https://i.ibb.co.com/7dG7kp3p/damian-kamp-Zudm-Lzd-QZz-M-unsplash.jpg"
                        alt="placeholder hero"
                        className="h-full w-full object-cover rounded-lg"
                    />

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
