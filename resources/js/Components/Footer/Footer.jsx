import { Link } from "@inertiajs/react";
import Menu from "../Menu/Menu";

export default function Footer({ current_menu, drop }) {
    return (
        <>
            <footer className="bg-dark text-light mt-5 pt-5">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-md-6">
                            <Link href="/" className="text-decoration-none">
                                <h3>
                                    <span className="text-white">Inona</span>
                                    <span className="text-danger">Ny</span>
                                    <span className="text-success">Vaovao</span>
                                </h3>
                            </Link>
                            <address>
                                <p>
                                    <i className="fa fa-location-dot">&nbsp;</i>
                                    Lot 44 IV J
                                </p>
                                <p>Antananarivo, 101</p>
                                <p>
                                    <i className="fa fa-phone-square">&nbsp;</i>
                                    032 033 034
                                </p>
                                <p>
                                    <i className="far fa-envelope">&nbsp;</i>
                                    inonanyvaovao@email.com
                                </p>
                            </address>
                        </div>
                        <div className="col-md-6">
                            <h4>Liens</h4>
                            <p>
                                <Link href="/" className="link-light">
                                    Acceuil
                                </Link>
                            </p>
                            <p>
                                <Link href="/à-propos" className="link-light">
                                    A-propos
                                </Link>
                            </p>
                            <p>
                                <Link className="link-light">A la une</Link>
                            </p>
                            <p>
                                <Link className="link-light">Catégories</Link>
                            </p>
                            <p>
                                <Link href="/contact" className="link-light">
                                    Contact
                                </Link>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center pb-3">
                        <small>&copy; Copyright InonaNyVaovao</small>
                        <br />
                        <small>By Haja</small>
                    </div>
                </div>
            </footer>
        </>
    );
}
