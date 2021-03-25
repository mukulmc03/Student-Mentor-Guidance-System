import React, { Component } from "react";

export default class AboutComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="card" style={{ top: "30px" }}>
          <div className="card-body">
            <h5 className="card-header text-center">About Us</h5>
            <p className="card-text justify">
              <br />
              This portal is to benefit students in their career in order to
              acquire required as well as desired skills through appropriate
              training courses. A mentor is an important part of the journey of
              learning. While we understand this, our honest effort is to tag
              along an expert who can guide the student and help him make most
              of the traning courses. The assignment of mentor is done keping in
              mind skillsets of the mentors, thier avaialability, the training
              course that the student has selected, etc. This is our first
              attempt to create a system to benefit our students.
              <h5>
                Please watch out this place for many more and advanced features
                to launch in near future.
              </h5>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
