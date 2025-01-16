import { Link } from "@inertiajs/react";

export default function PostCard({
    cover,
    title,
    date,
    likes,
    comments,
    excerpt,
    slug,
}) {
    return (
        <div className="card mb-3 shadow border-0">
            <div className="card-header p-0 shadow">
                <img
                    src={`/storage/${cover}`}
                    alt={title}
                    className="object-fit-cover w-100 rounded-top"
                    height={150}
                />
            </div>
            <div className="card-body">
                <h5 className="text-truncate">{title}</h5>
                <div className="d-flex mb-3">
                    <div className="small me-3">
                        <i className="fa fa-calendar">&nbsp;</i>
                        {new Date(date).toLocaleDateString()}
                    </div>
                    <div className="small me-3">
                        {likes}&nbsp;
                        <i className="fa fa-thumbs-up">&nbsp;</i>
                        J'aime
                    </div>
                    <div className="small me-3">
                        {comments}&nbsp;
                        <i className="fa fa-comment">&nbsp;</i>
                        Commentaire{comments > 1 && "s"}
                    </div>
                </div>
                <p className="text-truncate">{excerpt}</p>
            </div>
            <div className="card-footer bg-transparent text-end border-0">
                <Link
                    href={`/article/${slug}`}
                    className="btn btn-darkslategray"
                >
                    Lire l'article
                </Link>
            </div>
        </div>
    );
}
