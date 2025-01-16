import { usePage } from "@inertiajs/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Flash from "../Flash/Flash";

export default function Layout({ children }) {
    const { flash } = usePage().props;

    return (
        <>
            <Navbar />
            <Flash />
            {children}
            <Footer />
        </>
    );
}
