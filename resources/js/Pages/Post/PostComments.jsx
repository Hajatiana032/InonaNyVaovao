import { Link, usePage } from "@inertiajs/react";

export const PostComment = ({ user, date, content, comment_user_id }) => {
    const { auth } = usePage().props;

    return (
        <div className={"mb-3"}>
            <div className="h6 fw-bold">{user}</div>
            <div className="small">{new Date(date).toLocaleDateString()}</div>
            <div className="ps-3">{content}</div>
            {comment_user_id === auth.user.id && (
                <div className="text-end">
                    <Link className="link-danger small me-3">
                        <i className="fa fa-trash">&nbsp;</i>
                        Supprimer
                    </Link>
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
