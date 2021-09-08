import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div className='bg-background dark:bg-tertiary'>
            <Navbar />
            {children}
            <footer className="flex items-center justify-center w-full h-24 bottom-0 mb-0 border-t">
                <a>
                    By HaLi
                </a>
            </footer>
        </div>
    );
}