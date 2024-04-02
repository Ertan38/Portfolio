import { Link } from "@remix-run/react";

export default function contact() {
    return(
    <div className="container">
      <h2>Contact</h2>
      <h5>contact information</h5>
      <li className="list bi bi-telephone"> Phone number</li>
      <li className="list bi bi-envelope"> ertan.ertem@enorm.com</li>
      <li className="list bi bi-linkedin"><Link to="/" target="blank">Link</Link></li>
    </div>
  );
}
