import { useState } from "react";
import { API, Auth, Storage } from "aws-amplify";
import { createCard } from "../src/graphql/mutations";
import config from "../src/aws-exports";

const Profile = () => {
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [clientsServed, setClientsServed] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // upload the image to S3
        const uploadedImage = await Storage.put(image.name, image)
        console.log(uploadedImage)
        // submit the GraphQL query 
        const newCard = await API.graphql({
          query: createCard,
          variables: {
            input: {
              name,
              image: {
                // use the image's region and bucket (from aws-exports) as well as the key from the uploaded image
                region: config.aws_user_files_s3_bucket_region,
                bucket: config.aws_user_files_s3_bucket,
                key: uploadedImage.key
              },
              skill,
              description,
              rating,
              clientsServed
            }
          }
        })
        console.log(newCard)
      }

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
                        className="input-group-right outset-neomo width-full"
                        placeholder="Your Choice Image"
                        onChange={(valueEntered) =>
                            setImage(valueEntered.target.files[0])}
                        />
                    </div>
                    <br/>
                    <div className="input-group outset-neomo width-full">               
                        <input
                        type="text"
                        className="input-group-right outset-neomo width-full"
                        placeholder="Your User Name"
                        id={name}
                        onChange={(valueEntered) =>
                            setName(valueEntered.target.value)}
                        />
                    </div>
                    <br/>
                    <div className="input-group outset-neomo width-full">               
                        <input
                        type="text"
                        className="input-group-right outset-neomo width-full"
                        placeholder="Your Skill"
                        id={skill}
                        onChange={(valueEntered) =>
                            setSkill(valueEntered.target.value)}
                        />
                    </div>
                    <br/>
                    <div className="input-group outset-neomo width-full">               
                        <textarea
                        type="text"
                        className="input-group-right outset-neomo width-full"
                        placeholder="Describe our skill"
                        maxlength = "100"
                        id={description}
                        onChange={(valueEntered) =>
                            setDescription(valueEntered.target.value)}
                        />
                    </div>
                        <br/>
                    <div className="input-group outset-neomo width-full">               
                        <input
                        type="text"
                        className="input-group-right outset-neomo width-full"
                        placeholder="Clients Served"
                        id={clientsServed}
                        onChange={(valueEntered) =>
                            setClientsServed(valueEntered.target.value)}
                        />
                        </div>
                        <br/>
                    <div className="input-group outset-neomo width-full">               
                        <input
                        type="text"
                        className="input-group-right outset-neomo width-full"
                        placeholder="Your Rating"
                        id={rating}
                        onChange={(valueEntered) =>
                            setRating(valueEntered.target.value)}
                        />
                        </div>
                        <br/>
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
                <br/>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile;