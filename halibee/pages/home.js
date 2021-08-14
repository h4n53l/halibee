import Hero from "../components/hero/hero";
import { Link } from "../components/input/inputStyle";
import { Button } from "../components/tags";

const Home = () => {
  return (
    <div>
      <Hero />
      <br></br>
      <div className="cta-wrapper">
        <h3 className="section-title">Special Invitation</h3>
        <div className="columns cta">
          <div className="p-1">
            <img alt="Random Image" />
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
      <div className="columns">
        <div className="column p-2">
            
          <div className="card outset-neomo">
            <div className="card-content text-center">
              <img src="" alt="Freelancer Image" />
            </div>
            <div className="card-content">
              <h4>Tristique senectus et netus et.</h4>
              <p>
                Purus semper eget duis at tellus at urna condimentum mattis. Non
                blandit massa enim nec. Integer enim neque volutpat ac tincidunt
                vitae semper quis. Accumsan tortor posuere ac ut consequat
                semper viverra nam.
              </p>
              <p>Clients Served: 52 Rating: 5</p>
            </div>
          </div>
          
        </div>

        <div className="column p-2">
          <div className="card outset-neomo">
            <div className="card-content text-center">
              <img src="" alt="Freelancer Image" />{" "}
            </div>
            <div className="card-content">
              <h4>Tempor orci dapibus ultrices in.</h4>
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque. Sed arcu non odio euismod lacinia
                at quis risus. Faucibus turpis in eu mi bibendum neque egestas
                cmonsu songue. Phasellus vestibulum lorem sed risus.
              </p>
              <p>Clients Served: 52 Rating: 5</p>
            </div>
          </div>
        </div>

        <div className="column p-2">
          <div className="card outset-neomo">
            <div className="card-content text-center">
              <img src="" alt="Freelancer Image" />{" "}
            </div>
            <div className="card-content">
              <h4>Leo integer malesuada nunc vel risus.</h4>
              <p>
                Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut
                placerat orci nulla pellentesque dignissim enim. Libero id
                faucibus nisl tincidunt eget nullam. Commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <p>Clients Served: 52 Rating: 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
