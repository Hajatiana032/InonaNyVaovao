import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children, current_menu }) {
    return (
        <>
            <Navbar current_menu={current_menu} />
            {children}
            <Footer />
        </>
    );
}
