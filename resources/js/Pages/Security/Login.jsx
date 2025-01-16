import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";

export default function Login() {
    const { auth } = usePage().props;
    const { setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/connexion");
    };

    return (
        <div className="container text-darkslategray mt-5">
            <h1 className="text-center fw-bold">Connexion</h1>
            {auth.user && (
                <p className="text-center">
                    Vous êtes connecté(e)s en tant que {auth.user.email},{" "}
                    <Link href="/déconnexion">se déconnecter</Link>
                </p>
            )}
            <div className="m-auto mt-5" style={{ maxWidth: 350 }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            onChange={(e) => {
                                setData("email", e.target.value);
                            }}
                            className={`form-control ${
                                errors.email && "border-danger"
                            }`}
                        />
                        {errors.email && (
                            <div className="small text-danger text-center">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className={`form-control ${
                                errors.password && "border-danger"
                            }`}
                        />
                        {errors.password && (
                            <div className="small text-danger text-center">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-darkslategray w-100"
                            disabled={processing}
                        >
                            Connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Login.layout = (page) => <Layout>{page}</Layout>;
