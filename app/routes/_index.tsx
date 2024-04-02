import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import projecten from "../data";
import profile from "../images/Group 2.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Ertan Ertem" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="main container">
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-4">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ab nobis at, ducimus quidem modi dolor quae illo et non doloribus deserunt laborum a consequuntur illum velit impedit reprehenderit accusantium!</p>
            <button className="btn btn-primary">Download CV</button>
          </div>
          <div className="img col-md-6 d-flex justify-content-end">
            <img src={profile} className="img-responsive" loading="lazy" alt="Homepage" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h2>Projects</h2>
          <div className="col-md-12 d-flex justify-content-center">
            <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
              <div className="carousel-inner">
                {projecten.map((project, index) => (
                <div key={project.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <Link to={`/projects/${project.id}`}>
                    <img src={project.img} className="w-100" loading="lazy" alt="project display" />
                  </Link>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                  </div>
                </div>
                ))}
              </div>      
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="container mt-5">
        <div className="row">
          <h2>About me</h2>
        </div>
      </div>
      <div id="contact" className="container mt-5">
        <h2>Contact</h2>
        <h5>contact information</h5>
        <li className="list bi bi-telephone"> Phone number</li>
        <li className="list bi bi-envelope"> ertan.ertem@enorm.com</li>
        <li className="list bi bi-linkedin"><Link to="/" target="blank">Link</Link></li>
    </div>
    </div>
  );
}
