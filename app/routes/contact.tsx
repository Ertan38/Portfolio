import pfp from "../images/Ertan_FRONT.jpg";

export default function contact() {
    return(
            <div className="container p-3">
                <div className="row justify-content-center">
                    <h2 className="d-flex justify-content-center mb-5">Come in contact with me</h2>
                    <div className="contact col-md-3 p-5">
                        <h3>Ertan Ertem</h3>
                        <img src={pfp} className="img-fluid rounded-circle my-3" alt="Naam"/>
                        <hr />
                        <ul className="list-unstyled">
                          <li><i className="bi bi-telephone-fill"></i> +31681831495</li> 
                          <li><i className="bi bi-envelope-fill"></i> ertan.ertem@enorm.com</li>
                          <li><i className="bi bi-linkedin"></i> linkedin.com/</li>
                      </ul>
                    </div>
                    <form className="form col-md-5">
                        <div className="row">
                            <p className="p-0 m-1">Name</p>
                            <input type="text" className="form-control" id="inputName4"/>
                            <p className="p-0 m-1">Phone</p>
                            <input type="number" className="form-control" id="inputNumber4"/>
                            <p className="p-0 m-1">Email</p>
                            <input type="email" className="form-control" id="inputEmail4"/>
                            <p className="p-0 m-1">Message</p>
                            <textarea className="form-control" id="exampleFormControlTextarea4"/>
                          </div>
                        <div className="col-12 mt-3 d-flex justify-content-start">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>

  );
}