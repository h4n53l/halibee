import { withSSRContext } from "aws-amplify";
import Card from "../components/card";
import CardWrapper from "../components/cardWrapper";
import Hero from "../components/hero/hero";
import { Link } from "../components/input/inputStyle";
import { Button } from "../components/tags";
import Wrapper from "../components/wrapper";
import { listCards } from "../src/graphql/queries";

export async function getServerSideProps () {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listCards })
  
  return {
    props: {
      cards: data.listCards.items
    }
  }
}


const Home = ({cards}) => {
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
      {/* <Wrapper>
      {cards.map(cards => {
            return (
      <CardWrapper>
        <Card 
        name={cards.name}
        skill={cards.skill}
        description={cards.description}
        clientsServed={cards.clientsServed}
        rating={cards.rating}
        />
    </CardWrapper>
              
            )
          })}
    </Wrapper> */}
    </div>
  );
};

export default Home;
