export default function Slider(){
    return(
        <>
        <section id="slider" className="slider-area">
            <div className="container">
                <div className="intro-text clearfix" style={{
                    background: "rgba(255, 255, 255, 0.40)",
                    marginTop: 30,
                    padding: "5px 30px",
                    borderRadius: 10
                }}>
                    <h2>We build Cloud-based and Serverless Business Apps.</h2>
                    <p style={{ color: "#0f1d44" }}>We build web apps that allow you to do more, and sell more.</p>
                    <div className="clearfix video">
                    {/*
                        <a class="popup-youtube" href="http://www.youtube.com/watch?v=xtZE3sMv6lg">
                            <span class="ti-control-play"></span>
                        </a>
                        <div class="text">
                            <p>Watch</p>
                            <h6>INTRO VIDEO</h6>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}