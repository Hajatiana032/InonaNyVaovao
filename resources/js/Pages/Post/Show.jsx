import { Link } from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";
import PostCard from "../../Components/PostCard/PostCard";

export default function Show({ post, category, postsLike }) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-8">
                    <img
                        src={`/storage/img/uploads/posts/${post.cover}`}
                        alt={post.title}
                        className="w-100 object-fit-cover"
                        height={350}
                    />
                    <h1>{post.title}</h1>
                    <span className="badge bg-darkslategray">
                        {category.name}
                    </span>
                    <br />
                    <div className="d-flex">
                        <small className="me-5">
                            <i className="fa fa-calendar">&nbsp;</i>
                            {new Date(post.created_at).toLocaleDateString()}
                        </small>
                        <small className="me-5">
                            <i className="fa fa-comment">&nbsp;</i>0 Commentaire
                        </small>
                        <small>
                            <i className="fa fa-thumbs-up">&nbsp;</i>0 J'aime
                        </small>
                    </div>
                    <div className="mt-3 shadow p-3">{post.content}</div>
                    <div className="mt-2">
                        <textarea
                            name=""
                            id=""
                            rows={5}
                            className="form-control p-3"
                            placeholder="Votre commentaire"
                            style={{ resize: "none" }}
                        ></textarea>
                        <div className="text-end mt-2">
                            <button className="btn btn-darkslategray">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1>Articles similaires</h1>
                    <hr />
                    {postsLike.map((postLike) => (
                        <div key={postLike.id}>
                            <PostCard
                                cover={postLike.cover}
                                title={postLike.title}
                                excerpt={postLike.excerpt}
                                slug={postLike.slug}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Show.layout = (page) => <Layout current_menu={"post"}>{page}</Layout>;
