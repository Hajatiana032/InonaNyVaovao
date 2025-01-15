import { Link } from "@inertiajs/react";

export default function PostCard({ cover, title, excerpt, slug }) {
    return (
        <div className="card mb-3 shadow border-0">
            <div className="card-header p-0 shadow">
                <img
                    src={`/storage/img/uploads/posts/${cover}`}
                    alt={title}
                    className="object-fit-cover w-100 rounded-top"
                    height={150}
                />
            </div>
            <div className="card-body">
                <h5 className="text-truncate">{title}</h5>
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
