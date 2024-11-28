import { Link } from "@inertiajs/react";

export default function Menu({ current_menu }) {
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        href="/"
                        className={`nav-link ${
                            current_menu == "home" ? "active" : undefined
                        }`}
                    >
                        Acceuil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/à-propos"
                        className={`nav-link ${
                            current_menu == "about" ? "active" : undefined
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
                    <ul className="dropdown-menu shadow">
                        <li>
                            <Link className="dropdown-item">Catégorie 1</Link>
                            <Link className="dropdown-item">Catégorie 2</Link>
                            <Link className="dropdown-item">Catégorie 3</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link
                        href="/contact"
                        className={`nav-link ${
                            current_menu == "contact" ? "active" : undefined
                        }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    );
}
