import portfolio_content from "../portfolio_content.json";
import { useRouter } from "next/router";
export default function AboutUs(){
    const router = useRouter();

    const p_content = portfolio_content[router.query.id];
    if (!p_content) return <p></p>;
    return(
        <>
        <section id="aboutus" className="work-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-content">
                            <h5>ABOUT US</h5>
                            <h2>{p_content.name}.</h2>
                            <p>{p_content.desc1}</p>
                        </div>
                    </div>
                        <div className="col-md-5 col-sm-3">
                            <div className="about-img">
                                <img src={p_content.image3} alt='' />
                            </div>
                        </div>
                 </div>
            </div>
        </section>
        </>
    )
}