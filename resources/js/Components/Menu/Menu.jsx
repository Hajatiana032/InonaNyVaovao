import { Link, usePage } from "@inertiajs/react";

export default function Menu() {
    const { latestCategories, auth } = usePage().props;
    const { url, component } = usePage();

    return (
        <>
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <Link
                        href="/"
                        className={`nav-link ${
                            component === "Home/Home" && "active"
                        }`}
                    >
                        Acceuil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/à-propos"
                        className={`nav-link ${
                            component === "About/About" && "active"
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
                            url.startsWith("/cat%C3%A9gorie") && "text-success"
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
                                    url ===
                                    `/cat%C3%A9gorie/${lastestCategory.slug}`
                                        ? "bg-light"
                                        : "bg-darkslategray"
                                }`}
                            >
                                <Link
                                    href={`/catégorie/${lastestCategory.slug}`}
                                    className={
                                        url ===
                                        `/cat%C3%A9gorie/${lastestCategory.slug}`
                                            ? "link-darkslategray"
                                            : "link-light"
                                    }
                                >
                                    {lastestCategory.name}
                                </Link>
                            </li>
                        ))}
                        <div className="dropdown-divider"></div>
                        <li
                            className={`dropdown-item ${
                                url === "/cat%C3%A9gories"
                                    ? "bg-light"
                                    : "bg-darkslategray"
                            }`}
                        >
                            <Link
                                href="/catégories"
                                className={
                                    url === "/cat%C3%A9gories"
                                        ? "link-darkslategray"
                                        : "link-light"
                                }
                            >
                                Voir toutes
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link
                        href="/contact"
                        className={`nav-link ${
                            component === "Contact/Contact" && "active"
                        }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="ms-auto">
                {!auth.user ? (
                    <Link href="/connexion" className="btn btn-primary">
                        Connexion
                    </Link>
                ) : (
                    <button className="btn btn-success rounded-pill">
                        {auth.user.username}
                    </button>
                )}
            </div>
        </>
    );
}
