import { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="card offset-1 homepagecard1">
            <div className="card-body">
              <h4 className="card-title">Welcome, User!</h4>
              <p className="card-text">
                Register here!
                <Link to="/roles">
                  <br />
                  <button className="btn btn-success">ENROLL NOW</button>
                </Link>
              </p>
              <p className="card-text">
                Already registered as Mentor or Student?
                <Link to="/login">
                  <br />
                  <button className="btn btn-primary homeloginbutton">
                    LOGIN
                  </button>
                </Link>
              </p>
            </div>
          </div>

          <div className="sm-col-6 homeslide">
            <div
              id="carouselExampleCaptions"
              className="carousel slide  "
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124821702/original/f12a7d75a652e7eba12b88987ded050d835b9fab/be-your-online-mindful-mentor.png"
                    class="d-block w-100"
                    alt=""
                    width="2000"
                    height="400"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://davemenzies.com/wp-content/uploads/2016/11/m1j-630x315.jpg"
                    className="d-block w-100"
                    alt=""
                    width="2000"
                    height="400"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://davemenzies.com/wp-content/uploads/2016/11/m1j-630x315.jpg"
                    className="d-block w-100"
                    alt=""
                    width="2000"
                    height="400"
                  />
                </div>

                <div
                  className="carousel-control-prev"
                  type=""
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </div>

                <div
                  className="carousel-control-next"
                  type=""
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
