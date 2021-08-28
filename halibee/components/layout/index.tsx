import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div className='bg-background dark:bg-tertiary'>
            <Navbar />
            {children}
            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By HaLi
                </a>
            </footer>
        </div>
    );
}