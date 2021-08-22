import { Button } from "./tags";

const Section = (props) => {
    return (
        <div class="show-content container">
          <div class="section">
            <div class="columns">
                <div class="column size-12 text-center">
                  <div class="title"><h2>{props.title}</h2></div>
                </div>
              </div>
                <div class="columns">
                  <div class="column">
                    <div class="inset-neomo columns p-5 hide">
                      <div class="column p-2">
                        <div>
                          <p>{props.text}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                          <p>{props.subText}</p>
                        </div>
                        {props.button && <Button
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
                    {props.buttonText}
                  </Button>}
                      </div>

                      {props.image && <div class="column about-image">
                        <img
                          src={props.image}
                          alt={props.imageAlt}
                        />
                      </div>}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  </div>
        </div> 
      </div>
    );
}

export default Section;