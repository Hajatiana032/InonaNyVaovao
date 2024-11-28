import { Link } from "@inertiajs/react";
import Menu from "../Menu/Menu";

export default function Navbar({ current_menu }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-darkslategray">
                <div className="container">
                    <Link href="/" className="navbar-brand fw-bold">
                        <span className="text-light">Inona</span>
                        <span className="text-danger">Ny</span>
                        <span className="text-success">Vaovao</span>
                    </Link>
                    <div className="hstack gap-3 order-lg-last link-light">
                        <Link className="nav-link">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="nav-link">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="nav-link">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="nav-link">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="menu"
                    >
                        <Menu
                            current_menu={current_menu}
                            className={"navbar-nav"}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}
