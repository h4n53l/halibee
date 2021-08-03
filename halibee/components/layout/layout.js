import Footer from "./footer/footer";
import { LayoutContainer } from "./layoutStyle";
import Navbar from "./navbar/navbar";

const Layout = ({children}) => {
    return (
        <LayoutContainer>
        <Navbar />
            {children}
        <Footer />
        </LayoutContainer>
    );
}

export default Layout;