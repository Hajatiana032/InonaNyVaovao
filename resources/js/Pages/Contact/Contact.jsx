import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Layout from "../../Components/Layout/Layout";
import { router, usePage } from "@inertiajs/react";

export default function Contact() {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/envoyer", values, {
            preserveState: "errors",
            onSuccess: () => {},
        });
    };

    return (
        <>
            <Layout current_menu={"contact"}>
                <Breadcrumb current_page={"contact"} />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <address className="fs-3 border p-5 rounded text-darkslategray">
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
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit}>
                                <div className="row gy-1">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            className={`form-control ${
                                                errors.lastname
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Nom"
                                            value={values.lastname}
                                            onChange={handleChange}
                                        />
                                        {errors.lastname && (
                                            <small className="mb-2 text-danger">
                                                {errors.lastname}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            className={`form-control ${
                                                errors.firstname
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Prénom (facultatif)"
                                            value={values.firstname}
                                            onChange={handleChange}
                                        />
                                        {errors.firstname && (
                                            <small className="mb-2 text-danger">
                                                {first.lastname}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className={`form-control ${
                                                errors.phone
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Numéro de téléphone"
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && (
                                            <small className="mb-2 text-danger">
                                                {errors.phone}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className={`form-control ${
                                                errors.email
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Votre adresse email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <small className="mb-2 text-danger">
                                                {errors.email}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className={`form-control ${
                                                errors.subject
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Sujet"
                                            value={values.subject}
                                            onChange={handleChange}
                                        />
                                        {errors.subject && (
                                            <small className="mb-2 text-danger">
                                                {errors.subject}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className={`form-control ${
                                                errors.message
                                                    ? "is-invalid"
                                                    : undefined
                                            }`}
                                            placeholder="Message"
                                            style={{
                                                resize: "none",
                                                height: "150px",
                                            }}
                                            value={values.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.message && (
                                            <small className="mb-2 text-danger">
                                                {errors.message}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-darkslategray mt-3 float-end"
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
