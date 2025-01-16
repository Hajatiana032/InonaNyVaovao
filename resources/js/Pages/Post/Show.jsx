import { Link } from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";
import PostCard from "../../Components/PostCard/PostCard";
import { PostComments } from "./PostComments";
import { PostCommentForm } from "./PostCommentForm";
import Flash from "../../Components/Flash/Flash";

export default function Show({ article, postsLike }) {
    return (
        <div className="container mt-3 text-darkslategray">
            <div className="row">
                <div className="col-lg-8">
                    <img
                        src={`/storage/${article.cover}`}
                        alt={article.title}
                        className="w-100 object-fit-cover"
                        height={350}
                    />
                    <h1>{article.title}</h1>
                    <span className="badge bg-darkslategray">
                        {article.category.name}
                    </span>
                    <br />
                    <div className="d-flex">
                        <small className="me-5">
                            <i className="fa fa-calendar">&nbsp;</i>
                            {new Date(article.created_at).toLocaleDateString()}
                        </small>
                        <small className="me-5">
                            <i className="fa fa-thumbs-up">&nbsp;</i>0 J'aime
                        </small>
                        <small>
                            <i className="fa fa-comment">&nbsp;</i>
                            {article.comments.length} Commentaire
                            {article.comments.length > 1 ? "s" : undefined}
                        </small>
                    </div>
                    <div className="mt-3 shadow p-3">{article.content}</div>
                    <div className={"mt-3"}>
                        <h3>
                            {article.comments.length} Commentaire
                            {article.comments.length > 1 ? "s" : undefined}
                        </h3>
                        {article.comments.slice(0, 3).map((comment) => (
                            <div key={comment.id}>
                                <PostComments
                                    user={comment.user.username}
                                    date={comment.created_at}
                                    content={comment.content}
                                />
                            </div>
                        ))}
                        <div className="text-end">
                            <Link className="me-3">
                                <i className="fa fa-thumbs-up">&nbsp;</i>
                                J'aime
                            </Link>
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#comment"
                            >
                                <i className="fa fa-comment">&nbsp;</i>
                                Commenter
                            </a>
                        </div>
                    </div>
                    <div className="modal fade" id="comment">
                        <div className="modal-dialog">
                            <div className="modal-content rounded-0">
                                <div className="modal-header border-0">
                                    {article.comments.length} Commentaire
                                    {article.comments.length > 1
                                        ? "s"
                                        : undefined}
                                    <button
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div
                                    className="modal-body overflow-y-scroll"
                                    style={{ height: 450 }}
                                >
                                    {article.comments.map((comment) => (
                                        <div key={comment.id}>
                                            <PostComments
                                                user={comment.user.username}
                                                date={comment.created_at}
                                                content={comment.content}
                                                id={comment.id}
                                                comment_user_id={
                                                    comment.user.id
                                                }
                                                comment_slug={comment.slug}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="modal-footer">
                                    <Flash />
                                    <PostCommentForm
                                        article={article.id}
                                        modal_id={"comment"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1>articles similaires</h1>
                    <hr />
                    {postsLike.map((postLike) => (
                        <div key={postLike.id}>
                            <PostCard
                                cover={postLike.cover}
                                title={postLike.title}
                                date={postLike.created_at}
                                likes={postLike.likes.length}
                                comments={postLike.comments.length}
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

Show.layout = (page) => <Layout>{page}</Layout>;
