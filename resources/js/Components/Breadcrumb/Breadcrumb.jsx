import { Link } from "@inertiajs/react";

export default function Breadcrumb({ current_page }) {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <h3 className="fw-bold text-darkslategray col-lg-6 text-capitalize">
                        {current_page}
                    </h3>
                    <div className="col-lg-6">
                        <nav className="float-lg-end" aria-label="breadcrumb">
                            <ol className="breadcrumb ms-lg-auto">
                                <li className="breadcrumb-item">
                                    <Link href="/">Acceuil</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <Link
                                        href={current_page}
                                        aria-current="page"
                                    >
                                        {current_page}
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
