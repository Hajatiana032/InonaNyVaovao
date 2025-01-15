import { Link, usePage } from "@inertiajs/react";

export default function Menu({ current_menu, dropdown_menu }) {
    const { latestCategories } = usePage().props;
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
                        className={`nav-link dropdown-toggle ${
                            current_menu == "category" ? "active" : undefined
                        }`}
                        data-bs-toggle="dropdown"
                    >
                        Catégories
                    </Link>
                    <ul className="dropdown-menu bg-darkslategray">
                        {latestCategories.map((lastestCategory) => (
                            <li
                                key={lastestCategory.id}
                                className={`dropdown-item ${
                                    dropdown_menu == lastestCategory.slug
                                        ? "bg-light"
                                        : "bg-darkslategray"
                                }`}
                            >
                                <Link
                                    href={`/catégorie/${lastestCategory.slug}`}
                                    className={
                                        dropdown_menu == lastestCategory.slug
                                            ? "link-darkslategray"
                                            : "link-light"
                                    }
                                >
                                    {lastestCategory.name}
                                </Link>
                            </li>
                        ))}
                        <div className="dropdown-divider"></div>
                        <li className="dropdown-item bg-darkslategray">
                            <Link className="link-light">Voir tous</Link>
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
