import { useRouter } from "next/router";
import {
  auth,
  database,
  firestore,
} from "../../modules/firebase/initialiseFirebase";
import { collection, getDocs, query, where, limit } from "@firebase/firestore";
import { GetStaticPaths } from "next";
import { useEffect, useState } from "react";
import { onValue, push, ref } from "@firebase/database";
import InfoCard from "../../components/cards/infoCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { StarIcon } from "@heroicons/react/solid";

export const getStaticProps = async () => {
  const response = await getDocs(collection(firestore, "freelancers"));

  const userData = [];
  response.forEach((doc: any) => {
    userData.push(doc._document.data.value.mapValue.fields);
  });

  return {
    props: { userData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response: any = await getDocs(collection(firestore, "freelancers"));
  const paths = [];
  response.forEach((doc: any) => {
    paths.push(
      "/profiles/" +
        doc._document.data.value.mapValue.fields.displayName.stringValue
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();
  const { username } = router.query;
  const [hireForm, setHireForm] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectTitle, setProjectTitle] = useState(null);
  const [currentUser, loading, error] = useAuthState(auth);
  const [completedProjects, setCompletedProjects] = useState([]);
  const hiveOwner = userInfo;

  useEffect(() => {
    let completedProjectList = [];

    async function fetchUserData() {
      const response = await getDocs(
        query(
          collection(firestore, "freelancers"),
          where("displayName", "==", username),
          limit(1)
        )
      );
      setUserInfo(response.docs[0]["_document"].data.value.mapValue.fields);
    }

    if (userInfo) {
      onValue(
        ref(database, userInfo.uniqueID.stringValue + "/completedProjects/"),
        (snapshot) => {
          if (snapshot.val()) {
            for (var p in snapshot.val()) {
              completedProjectList.push(snapshot.val()[p]);
            }
          }
          const reviewed = completedProjectList.filter((project: any) =>
            project.hasOwnProperty("review")
          );
          setCompletedProjects(reviewed);
        }
      );
    }
    console.log(userInfo)
    fetchUserData();
  }, [userInfo]);

  const toggleHireButton = () => {
    if (currentUser) {
      setHireForm(true);
    } else {
      router.push("/authentication");
    }
  };

  const requestHire = () => {
    const hireRequestData = {
      title: projectTitle,
      description: projectDescription,
      clientUID: currentUser.uid,
      client: currentUser.displayName,
      freelancerUID: hiveOwner.uniqueID.stringValue,
      freelancer: hiveOwner.displayName.stringValue,
      freelancerAvatar: hiveOwner.avatar.stringValue,
      requestStatus: "Pending",
      requestTime: new Date().getTime(),
      clientAvatar: currentUser.photoURL,
    };

    push(ref(database, currentUser.uid + "/myProjects"), hireRequestData);
    setHireForm(null);
  };

  if (!userInfo || loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <div>Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center">
      <div
        style={{
          backgroundImage: "url(" + userInfo.bannerImageURL.stringValue + ")",
        }}
        className="relative md:pt-32 bg-center z-0 pb-52 pt-12 cover no-repeat"
      ></div>

      <div className="flex flex-wrap justify-center mb-16 align-center">
        <div className="z-10 -mt-10 sm:-mt-20 z-10 smx:h-60 h-90 w-40 lg:w-60  cursor-pointer m-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
          <img
            className="w-full max-h-60 object-cover"
            src={userInfo.cardImageURL.stringValue}
            alt="Photo"
          />
          <div className="text-center relative py-5">
            <h1 className="mb-1 text-2xl font-sans font-semibold text-primary dark:text-darkMode hover:text-secondary cursor-pointer">
              {userInfo.hiveName.stringValue}
            </h1>
            <span className="text-lg text-secondary hover:text-primary">
              {userInfo.skill.stringValue}
            </span>
          </div>
        </div>
      </div>
      {!hireForm && (
        <div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap ">
              <div className=" pt-10 md:-mt-40 lg:-mt-40 sm:mt-20  w-full md:w-4/12 px-4">
                <InfoCard
                  title="Average Rating"
                  value={userInfo.rating.integerValue}
                />
              </div>

              <div className="w-full smx:-mt-96 z-10 lg:mt-7 md:mt-7 sm:-mt-64 md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  {currentUser &&
                    hiveOwner.uniqueID.stringValue != currentUser.uid && (
                      <button
                        className="py-2 px-4  bg-primary dark:bg-darkMode text-secondary w-full text-center text-base font-semibold rounded-lg"
                        onClick={() => toggleHireButton()}
                      >
                        Hire Me
                      </button>
                    )}
                </div>
              </div>

              <div className=" pt-10 lg:-mt-40 md:-mt-40 -mt-40 sm:-mt-10  w-full md:w-4/12 px-4">
                <InfoCard
                  title="Projects Completed"
                  value={userInfo.projects.integerValue}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {hireForm && (
        <div className="mx-12">
          <form className="form bg-white rounded-lg p-6 my-10 relative">
            <h3 className="text-2xl text-primary text-center dark:text-darkMode font-bold">
              Project Details
            </h3>

            <input
              name="projectTitle"
              type="text"
              maxLength={91}
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Project Title"
            />

            <textarea
              name="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Short description of project"
              className="border p-2 mt-3 w-full"
            />
            <div className="relative flex flex-row items-center justify-center space-x-6 min-w-40 break-words w-full mb-8 ">
              <button
                className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                onClick={() => requestHire()}
              >
                Submit
              </button>
              <button
                className="py-2 px-4 mt-6 bg-secondary dark:bg-darkMode text-primary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                onClick={() => setHireForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <section className="mx-12 place-self-center text-primary text-center dark:text-darkMode">
        <div className=" flex flex-col w-full items-center">
          <h4 className="text-center font-bold text-3xl">
            About {userInfo.displayName.stringValue}
          </h4>
          <p className="text-center">{userInfo.about.stringValue}</p>
        </div>
      </section>

      <section className="m-6 text-primary dark:text-darkMode ">
        <div className=" flex flex-col w-full items-center">
          <h4 className="text-center font-bold text-3xl">Portfolio</h4>
        </div>
      </section>

      <section className="m-6 w-90 text-primary dark:text-darkMode ">
        <div className="flex flex-col w-full items-center">
          <h4 className="text-center font-bold text-3xl">Reviews</h4>

          <div className="w-full bg-white shadow-lg rounded-lg my-3 px-4 py-4">
            <div className="mb-1 tracking-wide px-4 py-4">
              <h2 className="text-gray-800 font-semibold mt-1">
                {userInfo.totalReviews.integerValue} Users reviews
              </h2>
              <div className="border-b -mx-8 px-8 pb-3">
                <div className="flex items-center mt-1">
                  <div className="flex flex-row h-5 w-40 text-secondary tracking-tighter">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="w-3/5">
                    <div
                      className="bg-primary text-sm font-medium text-secondary text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: userInfo.fiveStarPercentage.stringValue,
                      }}
                    ></div>
                  </div>
                  <div className="w-1/5 text-gray-700 pl-3">
                    <span className="text-sm">
                      {userInfo.fiveStarPercentage.stringValue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex flex-row h-5 w-40 text-secondary tracking-tighter">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="w-3/5">
                  <div
                      className="bg-primary text-sm font-medium text-secondary text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: userInfo.fourStarPercentage.stringValue,
                      }}
                    ></div>
                  </div>
                  <div className="w-1/5 text-gray-700 pl-3">
                    <span className="text-sm">
                      {userInfo.fourStarPercentage.stringValue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex flex-row h-5 w-40 text-secondary tracking-tighter">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="w-3/5">
                  <div
                      className="bg-primary text-sm font-medium text-secondary text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: userInfo.threeStarPercentage.stringValue,
                      }}
                    ></div>
                  </div>
                  <div className="w-1/5 text-gray-700 pl-3">
                    <span className="text-sm">
                      {userInfo.threeStarPercentage.stringValue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex flex-row h-5 w-40 text-secondary tracking-tighter">
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="w-3/5">
                  <div
                      className="bg-primary text-sm font-medium text-secondary text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: userInfo.twoStarPercentage.stringValue,
                      }}
                    ></div>
                  </div>
                  <div className="w-1/5 text-gray-700 pl-3">
                    <span className="text-sm">
                      {userInfo.twoStarPercentage.stringValue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex flex-row h-5 w-40 text-secondary tracking-tighter">
                    <StarIcon />
                  </div>
                  <div className="w-3/5">
                  <div
                      className="bg-primary text-sm font-medium text-secondary text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: userInfo.oneStarPercentage.stringValue,
                      }}
                    ></div>
                  </div>
                  <div className="w-1/5 text-gray-700 pl-3">
                    <span className="text-sm">
                      {userInfo.oneStarPercentage.stringValue}
                    </span>
                  </div>
                </div>
              </div>

              {completedProjects.map((project, index) => (
                <div className="flex items-start" key={index}>
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <div className="relative w-16 m-3 h-16 rounded-full overflow-hidden">
                        <img
                          className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                          src={project.clientAvatar}
                          alt="client_picture"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="m-6">
                    <p className="flex items-baseline">
                      <span className="text-gray-600 font-bold">
                        {project.client}
                      </span>
                      <span className="ml-2 text-green-600 text-xs">
                        Verified Client
                      </span>
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(project.review.rating)].map((_, index) => (
                        <StarIcon
                          className="text-secondary h-5 w-5"
                          key={index}
                        />
                      ))}
                    </div>
                    <div className="mt-3">
                      <span className="font-bold">
                        {project.review.reviewTitle}
                      </span>
                      <p className="mt-1">{project.review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
