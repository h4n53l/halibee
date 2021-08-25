import { useState } from "react";
import { API, Auth, Storage } from "aws-amplify";
import { createCard } from "../src/graphql/mutations";
import config from "../src/aws-exports";

const Profile = () => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [clientsServed, setClientsServed] = useState("");
  const [rating, setRating] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
        // console.log(image)
        // const uploadedImage = await Storage.put(image.name, image)

        // console.log(uploadedImage)
      const newCard = await API.graphql({
        query: createCard,
        variables: {
          input: {
            id: currentUser.attributes.sub,
            name,
            // image: {
            //     bucket: config.aws_user_files_s3_bucket,
            //     region: config.aws_user_files_s3_bucket_region,
            //     key: uploadedImage.key
            // },
            skill,
            description,
            rating,
            clientsServed,
          },
        },
      });
      console.log(newCard);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns just-center ml-2 interval-1 mt-5">
      <div className="column size-4">
        <div className="card outset-neomo">
          <header className="card-header">
            <p className="card-header-title text-center text-color font-size-4">
              Create a Skill Card!
            </p>
          </header>
          <div className="card-content">
            <div className="input-group outset-neomo width-full">
              <input
                type="file"
                accept="image/*"
                className="input-group-right outset-neomo width-full"
                placeholder="Your Choice Image"
                onChange={(valueEntered) =>
                  setImage(valueEntered.target.files[0])
                }
              />
            </div>
            <br />
            <div className="input-group outset-neomo width-full">
              <input
                type="text"
                className="input-group-right outset-neomo width-full"
                placeholder="Your User Name"
                value={name}
                onChange={(valueEntered) => setName(valueEntered.target.value)}
              />
            </div>
            <br />
            <div className="input-group outset-neomo width-full">
              <input
                type="text"
                className="input-group-right outset-neomo width-full"
                placeholder="Your Skill"
                value={skill}
                onChange={(valueEntered) => setSkill(valueEntered.target.value)}
              />
            </div>
            <br />
            <div className="input-group outset-neomo width-full">
              <textarea
                type="text"
                className="input-group-right outset-neomo width-full"
                placeholder="Describe our skill"
                maxLength="100"
                value={description}
                onChange={(valueEntered) =>
                  setDescription(valueEntered.target.value)
                }
              />
            </div>
            <br />
            <div className="input-group outset-neomo width-full">
              <input
                type="text"
                className="input-group-right outset-neomo width-full"
                placeholder="Clients Served"
                value={clientsServed}
                onChange={(valueEntered) =>
                  setClientsServed(valueEntered.target.value)
                }
              />
            </div>
            <br />
            <div className="input-group outset-neomo width-full">
              <input
                type="text"
                className="input-group-right outset-neomo width-full"
                placeholder="Your Rating"
                value={rating}
                onChange={(valueEntered) =>
                  setRating(valueEntered.target.value)
                }
              />
            </div>
            <br />
            <button
              onClick={handleSubmit}
              type="submit"
              className="
                    button
                    mt-2
                    mb-2
                    font-weight-2
                    outset-neomo
                    width-full
                    text-color
                    font-size-6
                    sign-button
                  "
            >
              Create card
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
