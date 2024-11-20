import { Link } from "@inertiajs/react";

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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className={`nav-link ${
                                        current_menu == "home"
                                            ? "active"
                                            : undefined
                                    }`}
                                >
                                    Acceuil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/à-propos"
                                    className={`nav-link ${
                                        current_menu == "about"
                                            ? "active"
                                            : undefined
                                    }`}
                                >
                                    A-propos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">A la une</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Catégories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item">
                                            Catégorie 1
                                        </Link>
                                        <Link className="dropdown-item">
                                            Catégorie 2
                                        </Link>
                                        <Link className="dropdown-item">
                                            Catégorie 3
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
