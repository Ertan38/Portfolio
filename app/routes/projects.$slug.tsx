import { useLoaderData, Link } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import projects from "../data";


type Project = {
  id: string;
  name: string;
  description: string;
  img: string;
  content: string;
};


export const loader: LoaderFunction = async ({ params }) => {
  const project = projects.find(p => p.id === params.slug);
  if (!project) throw new Error("Project not found");
  return project;
};


export default function Project() {
  const project = useLoaderData<Project>();

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="info col-md-8">
          <h2 className="pb-3">{project.name}</h2>
          <p>{project.content}</p>
          <img className="img-thumbnail" src={project.img} alt="Project example" />
        </div>
      </div>
      <div className="row p-3 justify-content-end">
        <div className="col-md-3">
          <button className="btn btn-primary"><Link to="/projects">Back</Link></button>
        </div>
      </div>
    </div>
  );
}
