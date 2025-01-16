import Layout from "../../Components/Layout/Layout";
import PostCard from "../../Components/PostCard/PostCard";

export default function Show({ category, posts }) {
    return (
        <Layout current_menu={"category"} dropdown_menu={category.slug}>
            <div className="container text-darkslategray mt-3">
                <h1 className="fw-bold">{category.name}</h1>
                <hr />
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col-lg-4">
                            <PostCard
                                cover={post.cover}
                                title={post.title}
                                date={post.created_at}
                                likes={post.likes.length}
                                comments={post.comments.length}
                                excerpt={post.excerpt}
                                slug={post.slug}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
