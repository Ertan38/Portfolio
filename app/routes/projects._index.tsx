import { Link } from "@remix-run/react";
import projecten from "../data";

export default function projects() {
    return(
    <div className="container">
      <h1>Project Overview</h1>
      <div className="row p-3 ">
        {projecten.map((project) => (
          <div key={project.id} className="card col-md-2">
            <img className="card-img-thumbnail" src={project.img} alt="project display"/>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <button className="btn btn-primary"><Link to={`/projects/${project.id}`}>Bekijk project</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
