import { left } from "@popperjs/core";
import Layout from "../../Components/Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <Layout current_menu={"home"}>
                <div className="container"></div>
            </Layout>
        </>
    );
}
