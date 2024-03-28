import { Link } from "@remix-run/react";
import projecten from "../data";

export default function projects() {
    return(
    <div className="container">
      <h1>Project Overview</h1>
      <div className="row p-3 d-flex justify-content-center">
        {projecten.map((project) => (
          <div key={project.id} className="card col-md-5 p-0">
            <img className="card-img-top" src={project.img} alt="project display"/>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <div className="col p-3">
                <button className="btn btn-primary m-2"><Link to={`/projects/${project.id}`}>Bekijk project</Link></button>
                <button className="btn btn-secondary m-2"><Link to={project.link}>Bekijk op Github</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
