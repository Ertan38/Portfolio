// import pfp from "../images/Ertan_FRONT.jpg";
import quote from "../images/quote.png";

export default function about() {
    return(
        <div className="main">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://www.placeholder.com/750x750" loading="lazy" className="img-fluid mb-3" alt="Naam"/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h5>About me</h5>
                        <h2>Ertan Ertem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                        <button className="btn btn-primary mt-4">Download CV</button>
                    </div>
                </div>
            </div>
            <div className="banner">
                <img className="w-100" src={quote} loading="lazy" alt="banner" />
            </div>
            <div className="container py-5">
                <div className="row">
                <div className="col-md-6 align-self-center">
                            <h2>Ervaring & Educatie</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                            <button className="btn btn-primary mt-4">Download CV</button>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.placeholder.com/750x750" loading="lazy" className="img-fluid mb-3" alt="Naam"/>
                        </div>
                    </div>
                </div>
                {/* <div className="banner">
                <img src="https://placehold.jp/1920x500.png" loading="lazy" alt="banner" />
                </div> */}
            <div className="container py-5">
                <div className="row">
                <div className="col-md-6">
                            <img src="https://www.placeholder.com/750x750" loading="lazy" className="img-fluid mb-3" alt="Naam"/>
                        </div>
                <div className="col-md-6 align-self-center">
                            <h2>Interesses en Hobbies</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam quaerat consequatur, aperiam veniam ipsum ipsa ratione eum facere alias dolore optio eveniet sed possimus aliquam omnis quidem? Excepturi, maiores.</p>
                            <button className="btn btn-primary mt-4">Download CV</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
