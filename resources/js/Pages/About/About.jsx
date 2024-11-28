import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Layout from "../../Components/Layout/Layout";
import TeamCard from "../../Components/TeamCard/TeamCard";
import about_company_1 from "/resources/img/about-company-1.jpg";
import about_company_2 from "/resources/img/about-company-2.jpg";
import about_company_3 from "/resources/img/about-company-3.jpg";

export default function About() {
    return (
        <>
            <Layout current_menu={"about"}>
                <Breadcrumb current_page={"A-propos"} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-darkslategray">
                                <h4>Qui sommes nous?</h4>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laboriosam, nisi.
                                </h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet recusandae ad,
                                    nesciunt saepe natus temporibus eaque sint
                                    dolor obcaecati iusto?
                                </p>
                                <p>
                                    <i className="far fa-check-circle text-success">
                                        &nbsp;
                                    </i>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Quae minus praesentium
                                    officia placeat, reiciendis facilis eum,
                                    aliquid ipsam perspiciatis id, delectus
                                    dolorum quos maxime? Ducimus ut
                                    reprehenderit quaerat odio pariatur.
                                </p>
                                <p>
                                    <i className="far fa-check-circle text-success">
                                        &nbsp;
                                    </i>
                                    Ut odio totam repudiandae voluptatem
                                    eligendi, quisquam sequi, iusto quasi sit
                                    consequatur suscipit cumque aspernatur
                                    itaque temporibus, ullam assumenda sint
                                    facilis quis. Minus numquam illum, est rem
                                    accusantium hic iure.
                                </p>
                                <p>
                                    <i className="far fa-check-circle text-success">
                                        &nbsp;
                                    </i>
                                    Minima ea dolores est nam ex esse, pariatur
                                    magni nemo tempora rem sit repudiandae
                                    aliquid officia reiciendis vitae? Deserunt
                                    corrupti fuga doloremque explicabo nemo
                                    eaque. Nostrum adipisci explicabo blanditiis
                                    ratione.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <img
                                        src={about_company_1}
                                        alt="about_company_1"
                                        className="rounded img-fluid"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="row gy-4">
                                        <div className="col-lg-12">
                                            <img
                                                src={about_company_2}
                                                alt="about_company_2"
                                                className="img-fluid rounded m-auto"
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <img
                                                src={about_company_3}
                                                alt="about_company_2"
                                                className="img-fluid rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="text-darkslategray">
                                    Notre team
                                </h1>
                            </div>
                            <div className="col-lg-6 m-auto">
                                <p className="me-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eveniet, dolores.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5 row gy-2">
                            <TeamCard
                                name="Walter White"
                                function="hief Executive Officer"
                            />
                            <TeamCard
                                name="Sarah Jhonson"
                                function="Product Manager"
                            />
                            <TeamCard name="William Anderson" function="CTO" />
                            <TeamCard
                                name="Amanda Jepson"
                                function="Accountant"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
