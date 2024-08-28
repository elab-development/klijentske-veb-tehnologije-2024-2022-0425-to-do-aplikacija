import Features from "./Features";
import Hero from "./Hero";
import Pros from "./Pros";
import Testimonials from "./Testimonials";

function About(){

    return (
        <div className="App">
            <Hero />
            <Pros/>
            <Features />
            <Testimonials />
        </div>
      );
}
;

export default About;
