import { Link, usePage } from "@inertiajs/react";

export const PostComments = ({
    user,
    date,
    content,
    comment_user_id,
    comment_slug,
}) => {
    const { auth } = usePage().props;

    return (
        <div className={"mb-3"}>
            <div className="h6 fw-bold">{user}</div>
            <div className="small">{new Date(date).toLocaleDateString()}</div>
            <div className="ps-3">{content}</div>
            {auth.user && comment_user_id === auth.user.id && (
                <div className="text-end">
                    <link
                        href={`/article/{post:slug}/commentaire/supprimer/${comment_slug}`}
                        method="delete"
                        className="link-danger small me-3"
                    >
                        <i className="fa fa-trash">&nbsp;</i>
                        Supprimer
                    </link>
                    <Link className="link-warning small">
                        <i className="fa fa-edit">&nbsp;</i>
                        Modifier
                    </Link>
                </div>
            )}
            <hr />
        </div>
    );
};
