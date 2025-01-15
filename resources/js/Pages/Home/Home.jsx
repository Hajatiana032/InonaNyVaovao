import { Link } from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";

export default function Home({ categories }) {
    return (
        <>
            <div className="container">
                {categories.map((category) => (
                    <div key={category.id} className="text-darkslategray mt-3">
                        <div className="row">
                            <h3 className="fw-bold">{category.name}</h3>
                            <hr />
                            {category.posts.map((post) => (
                                <div className="col-lg-3 mb-lg-3" key={post.id}>
                                    <img
                                        src={`/storage/img/uploads/posts/${post.cover}`}
                                        alt=""
                                        className="w-100 object-fit-cover"
                                        height={250}
                                    />
                                    <h4 className="mt-2 text-truncate">
                                        {post.title}
                                    </h4>

                                    <p style={{ height: 100 }}>
                                        {post.excerpt}
                                    </p>
                                    <div className="text-end">
                                        <Link
                                            href={`/article/${post.slug}`}
                                            className="btn btn-outline-darkslategray"
                                        >
                                            Lire l'article
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

Home.layout = (page) => <Layout children={page} current_menu={"home"} />;
