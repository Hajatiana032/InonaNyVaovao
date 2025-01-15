import {Link} from "@inertiajs/react";
import Layout from "../../Components/Layout/Layout";
import {useState} from "react";

export default function Index({categories}) {
    const [hover, setHover] = useState(null);

    return (
        <Layout current_menu={"category"} dropdown_menu={"all"}>
            <div className="container-fluid mt-3">
                <div className="row gy-3">
                    {categories.map((category, index) => (
                        <div key={category.id} className="col-md-6 col-lg-3">
                            <Link href={`/catégorie/${category.slug}`}>
                                <div
                                    className="card shadow border-0"
                                    onMouseEnter={() => {
                                        setHover(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHover(null);
                                    }}
                                    style={{
                                        height: 250,
                                        transform:
                                            hover === index
                                                ? "scale(1.05, 1.05)"
                                                : undefined,
                                        transition: "0.5s",
                                    }}
                                >
                                    <div className="card-body align-items-center justify-content-center d-flex">
                                        {category.posts.map((post) => (
                                            <div
                                                key={post.id}
                                                className="rounded bg-darkslategray position-absolute w-100 h-100"
                                            >
                                                <img
                                                    src={`/storage/img/uploads/posts/${post.cover}`}
                                                    alt=""
                                                    className={`
                                                     w-100 h-100 rounded object-fit-cover`}
                                                    style={{
                                                        transition: "0.5s",
                                                        filter: hover === index ? "brightness(50%)" : "contrast(100%)"
                                                    }}
                                                />
                                            </div>
                                        ))}
                                        <h1
                                            className="z-0 text-light"
                                            style={{
                                                transform:
                                                    hover === index
                                                        ? "scale(1.2, 1.2)"
                                                        : undefined,
                                                transition: "1s",
                                            }}
                                        >
                                            {category.name}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
