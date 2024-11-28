import Layout from "../../Components/Layout/Layout";

export default function Home({ categories }) {
    return (
        <>
            <div className="container">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="fw-bold text-darkslategray"
                    >
                        <h3>{category.name}</h3>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}

Home.layout = (page) => <Layout children={page} current_menu={"home"} />;
