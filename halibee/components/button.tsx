export default function Button({children}) {
    return (
        <button type="button" 
        className="py-2 px-4  bg-primary dark:bg-darkMode text-secondary w-full text-center text-base font-semibold rounded-lg">
          {children}
          </button>
    );
}
