import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div className='bg-background min-h-screen dark:bg-tertiary'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}