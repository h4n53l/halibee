import { useRouter } from "next/router";

export default function CallToAction() {
  const router = useRouter()

  
  return (
    <div className="container mx-auto my-10 px-auto">
      <div className="items-center align-center justify-center flex flex-wrap">
        
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">

            <h3 className="text-primary text-center text-3xl font-bold">
              A Very Special Announcement
            </h3>
            <div className="flex flex-col justify-center">
            <p 
            className="mt-4 text-lg text-center leading-relaxed text-gray-700"
            >
              Are you looking to hire a reliable freelancer for your project, with a guarantee on us?
            </p>
            <p 
            className="mt-4 text-lg text-center text-gray-700"
            >
              Or
            </p>
            <p 
            className="mt-4 text-lg text-center leading-relaxed text-gray-700"
            >
              Are you a highly skilled freelancer looking to expand your reach?
            </p>
            <button 
            className="bg-primary  dark:bg-darkMode mt-3 text-secondary font-bold uppercase text-base px-8 py-3 rounded ease-linear" 
            onClick={() => router.push('/authentication')}
            >
              Take the First Step
            </button>
            
          </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 ml-auto mr-auto px-2">
          <img
            alt="..."
            className="max-w-full py-5"
            src="assets/images/image_3.jpg"
          />
        </div>
      </div>
    </div>
  );
}