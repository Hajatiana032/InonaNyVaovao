import { router, useForm, usePage } from "@inertiajs/react";
import { Modal } from "bootstrap";

export const PostCommentForm = () => {
    const { auth, post } = usePage().props;

    const { data, setData, errors, reset, processing } = useForm({
        content: "",
        post_id: post.id,
        user_id: auth.user && auth.user.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!auth.user) {
            router.visit("/connexion", {
                onFinish: () => {
                    Modal.getInstance(
                        document.getElementById("comment")
                    ).hide();
                },
            });
        }

        router.post(`/aricle/${post.slug}/commentaire/ajouter`, data, {
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <textarea
                name=""
                id=""
                rows={3}
                value={data.content}
                onChange={(e) => {
                    setData("content", e.target.value);
                }}
                className="form-control p-3"
                placeholder="Votre commentaire"
                style={{ resize: "none" }}
            ></textarea>
            {errors.content && (
                <div className="text-danger small">{errors.content}</div>
            )}
            <div className="text-end mt-2">
                <button
                    type="submit"
                    className="btn btn-darkslategray"
                    disabled={processing}
                >
                    Envoyer
                </button>
            </div>
        </form>
    );
};
