export default function Button({children}) {
    return (
        <button type="button" 
        className="py-2 px-4  bg-primary dark:bg-darkMode text-secondary w-full text-center text-base font-semibold rounded-lg">
          {children}
          </button>
    );
}

{/* //                 <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                //     <div className="w-full">
                //         <div className=" relative ">
                //             <input
                //                 type="text"
                //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                //                 placeholder="Your Bio" />
                //         </div>
                //     </div>
                //     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                //                 <button
                //                     className="py-2 px-4  bg-primary dark:bg-darkMode text-secondary w-full text-center text-base font-semibold rounded-lg"
                //                     onClick={() => setHireForm(true)}
                //                 >
                //                     Submit
                //                 </button>
                //             </div>
                // </div> */}