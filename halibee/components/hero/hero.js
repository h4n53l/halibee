import { HeroSection, HeroSubtitle, HeroTitle } from "./heroStyles";

const Hero = () => {
    return (
            <HeroSection>
                <HeroTitle>
                    GO <span>BIG</span> WITH <span>HALIBEE</span>
                </HeroTitle>
                <HeroSubtitle>
                    "Knowledge isn't Power until it is Applied"
                    <br></br>
                    <span>― Dale Carnegie</span>
                    </HeroSubtitle>
                </HeroSection>
    );
}

export default Hero;