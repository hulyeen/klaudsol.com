export default function Footer(){
    return(
        <>
        <footer id="footer" className="footer-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-title">
                            <h2>KlaudSol</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-social">
                            <a href="https://www.facebook.com/klaudsol/" target="_blank">
                            <span className="ti-facebook" /></a>
                            <a href="https://www.linkedin.com/company/14594185" target="_blank">
                            <span className="ti-linkedin" /></a>
                        </div>
                        <p>
                        Copyright © 2019 - 2022. All rights reserved to{" "}
                        <a href="https://klaudsol.com">KlaudSol Philippines, Inc.</a>
                        <br />
                        Level 10-01 One Global Place, 5th Avenue &amp; 25th Street,
                        Bonifacio Global City, Taguig, Metro Manila, Philippines
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* Footer area ends */}
        </>
    )
}