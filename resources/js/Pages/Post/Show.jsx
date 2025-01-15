import { Link } from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";
import PostCard from "../../Components/PostCard/PostCard";
import { PostComment } from "./PostComments";
import { Tooltip } from "react-bootstrap";

export default function Show({ post, category, postsLike, comments }) {
    return (
        <div className="container mt-3 text-darkslategray">
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
                        {post.category.name}
                    </span>
                    <br />
                    <div className="d-flex">
                        <small className="me-5">
                            <i className="fa fa-calendar">&nbsp;</i>
                            {new Date(post.created_at).toLocaleDateString()}
                        </small>
                        <small className="me-5">
                            <i className="fa fa-comment">&nbsp;</i>
                            {comments.length} Commentaire
                            {comments.length > 1 ? "s" : undefined}
                        </small>
                        <small>
                            <i className="fa fa-thumbs-up">&nbsp;</i>0 J'aime
                        </small>
                    </div>
                    <div className="mt-3 shadow p-3">{post.content}</div>
                    <div className={"mt-3"}>
                        <h3>
                            {comments.length} Commentaire
                            {comments.length > 1 ? "s" : undefined}
                        </h3>
                        {comments.slice(0, 3).map((comment) => (
                            <PostComment
                                key={comment.id}
                                date={comment.created_at}
                                content={comment.content}
                            />
                        ))}
                        <div className="text-end">
                            <Link className="me-3">
                                <i className="fa fa-thumbs-up">&nbsp;</i>
                                J'aime
                            </Link>
                            <Link
                                data-bs-toggle="modal"
                                data-bs-target="#comment"
                            >
                                <i className="fa fa-comment">&nbsp;</i>
                                Commenter
                            </Link>
                        </div>
                    </div>
                    <div className="modal fade" id="comment">
                        <div className="modal-dialog">
                            <div className="modal-content rounded-0">
                                <div className="modal-header border-0">
                                    {comments.length} Commentaire
                                    {comments.length > 1 ? "s" : undefined}
                                    <button
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div
                                    className="modal-body overflow-y-scroll"
                                    style={{ height: 450 }}
                                >
                                    {comments.map((comment) => (
                                        <PostComment
                                            key={comment.id}
                                            date={comment.created_at}
                                            content={comment.content}
                                        />
                                    ))}
                                </div>
                                <div className="modal-footer">
                                    {" "}
                                    <textarea
                                        name=""
                                        id=""
                                        rows={3}
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
