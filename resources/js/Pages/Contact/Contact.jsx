import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Layout from "../../Components/Layout/Layout";
import { useForm } from "@inertiajs/react";

export default function Contact() {
    const { data, setData, errors, processing, post, reset } = useForm({
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/envoyer", { onSuccess: () => reset() });
    };

    return (
        <>
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
                                            errors.lastname && "is-invalid"
                                        }`}
                                        placeholder="Nom"
                                        value={data.lastname}
                                        onChange={(e) =>
                                            setData("lastname", e.target.value)
                                        }
                                    />
                                    {errors.lastname && (
                                        <div className="mb-2 small text-danger">
                                            {errors.lastname}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        className={`form-control ${
                                            errors.firstname && "is-invalid"
                                        }`}
                                        placeholder="Prénom (facultatif)"
                                        value={data.firstname}
                                        onChange={(e) => {
                                            setData(
                                                "firstname",
                                                e.target.value
                                            );
                                        }}
                                    />
                                    {errors.firstname && (
                                        <div className="mb-2 small text-danger">
                                            {first.lastname}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className={`form-control ${
                                            errors.phone && "is-invalid"
                                        }`}
                                        placeholder="Numéro de téléphone"
                                        value={data.phone}
                                        onChange={(e) => {
                                            setData("phone", e.target.value);
                                        }}
                                    />
                                    {errors.phone && (
                                        <div className="mb-2 small text-danger">
                                            {errors.phone}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`form-control ${
                                            errors.email && "is-invalid"
                                        }`}
                                        placeholder="Votre adresse email"
                                        value={data.email}
                                        onChange={(e) => {
                                            setData("email", e.target.value);
                                        }}
                                    />
                                    {errors.email && (
                                        <div className="mb-2 small text-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className={`form-control ${
                                            errors.subject && "is-invalid"
                                        }`}
                                        placeholder="Sujet"
                                        value={data.subject}
                                        onChange={(e) => {
                                            setData("subject", e.target.value);
                                        }}
                                    />
                                    {errors.subject && (
                                        <div className="mb-2 small text-danger">
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className={`form-control ${
                                            errors.message && "is-invalid"
                                        }`}
                                        placeholder="Message"
                                        style={{
                                            resize: "none",
                                            height: "150px",
                                        }}
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                    ></textarea>
                                    {errors.message && (
                                        <div className="mb-2 small text-danger">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-darkslategray mt-3 float-end"
                                disabled={processing}
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Contact.layout = (page) => (
    <Layout>
        <Breadcrumb current_page={"contact"} />
        {page}
    </Layout>
);
