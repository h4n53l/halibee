import Card from "../components/card";
import CardWrapper from "../components/cardWrapper";
import Hero from "../components/hero/hero";
import { Link } from "../components/input/inputStyle";
import { Button } from "../components/tags";
import Wrapper from "../components/wrapper";

const Home = () => {
  return (
    <div>
      <Hero />
      <br></br>
      <div className="cta-wrapper">
        <h3 className="section-title">Special Invitation</h3>
        <div className="columns cta">
          <div className="p-1">
            <img
              alt="Random Image"
              src="https://via.placeholder.com/500x350"
            />
          </div>
          <div className="p-1">
            <p className="text-center">
              Are you looking to hire <br></br>reliable and verified
              freelancers?
            </p>
            <div className="text-center">or</div>
            <p className="text-center">
              Are you a highly skilled credible <br></br>freelancer looking to
              increase your reach?
            </p>
          </div>
        </div>
        <Link href="./login">
          <Button
            className="
            button
            mt-2
            mb-2
            font-weight-2
            outset-neomo
            success
            font-size-4
            sign-button
            "
          >
            Take the first step
          </Button>
        </Link>
      </div>
      <br></br>
      <h3 className="section-title">Featured HaLiBees</h3>
      <Wrapper>
      <CardWrapper>

        <Card 
        name="Bwatma" 
        skill="Web Developer"
        description="Test description"
        clientsServed="6"
        rating="3"
        />

    </CardWrapper>
    </Wrapper>
    </div>
  );
};

export default Home;
