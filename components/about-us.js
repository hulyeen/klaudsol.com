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
                            <h2>Aliqua commodo sunt laboris mollit..</h2>
                            <p>
                           Ut fugiat dolore sunt adipisicing aute consectetur adipisicing duis velit voluptate anim non velit. Amet officia consequat ad cillum. Dolore minim enim sunt nisi. Sunt consequat nisi reprehenderit excepteur laborum Lorem amet eiusmod do adipisicing. Ullamco cupidatat sint veniam culpa aute do minim aute Lorem mollit quis non. Mollit qui reprehenderit sunt amet Lorem ad ipsum officia. Ad aliqua velit duis eiusmod ipsum non dolore occaecat veniam.
                            </p>
                        </div>
          {/*
              <div class="about-boxs">

                  <div class="about-box">
                      <span class="ti-briefcase"></span>
                      <h3>289</h3>
                      <p>Job Completed</p>
                  </div>

                  <div class="about-box">
                      <span class="ti-pencil-alt"></span>
                      <h3>163</h3>
                      <p>Ongoing Jobs</p>
                  </div>

                  <div class="about-box">
                      <span class="ti-cup"></span>
                      <h3>023</h3>
                      <p>Achivements</p>
                  </div>

              </div>
              */}
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