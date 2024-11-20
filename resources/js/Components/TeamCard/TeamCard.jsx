import { Link } from "@inertiajs/react";

export default function TeamCard(props) {
    return (
        <>
            <div className="col-lg-6 text-darkslategray">
                <div className="card shadow border">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-8">
                                <h5>{props.name}</h5>
                                <small>{props.function}</small>
                                <hr className="w-25" />
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </p>
                                <div className="hstack gap-3 order-lg-last link-bg-darkslategray">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
