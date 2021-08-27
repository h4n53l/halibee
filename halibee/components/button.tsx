export default function Button(props) {
    return (
        <button type="button" className={`${props.toggled ? 'bg-secondary' : 'bg-primary'} py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}>
            {props.text}
          </button>
    );
}