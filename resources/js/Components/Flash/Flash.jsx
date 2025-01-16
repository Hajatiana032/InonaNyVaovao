import { usePage } from "@inertiajs/react";

export default function Flash() {
    const { flash } = usePage().props;
    return (
        <div className="container">
            {flash.success && (
                <div
                    className="alert alert-success alert-dismissible fade show mt-3 rounded-pill text-center"
                    role="alert"
                    id="alert"
                >
                    {flash.success}
                    <button
                        className="btn-close shadow-none"
                        data-bs-dismiss="alert"
                    ></button>
                </div>
            )}
            {flash.danger && (
                <div
                    className="alert alert-danger alert-dismissible fade show mt-3 rounded-pill text-center"
                    role="alert"
                    id="alert"
                >
                    {flash.danger}
                    <button
                        className="btn-close shadow-none"
                        data-bs-dismiss="alert"
                    ></button>
                </div>
            )}
        </div>
    );
}
