import React, { Component } from "react";
import StudentService from "../Services/StudentService";

class AssignedMentorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignedMentor: "",
    };
  }

  componentDidMount() {
    StudentService.getAssignedMentorByStudentId(this.props.data1).then(
      (response) => {
        this.setState({ assignedMentor: response.data });
      }
    );
  }

  buttonHandler = () => {
    StudentService.getAutomaticMentor(this.props.data1).then((response) => {
      this.setState({
        assignedMentor: response.data,
      });
    });
  };

  render() {
    if (this.state.assignedMentor === "") {
      return (
        <div className="card text-white bg-dark mb-3 coursedetailcard nomentortext">
          <br />
          <br />
          <h5>You Dont Have Any Mentor...!! </h5>
          <h5>The role of a mentor is to encourage the personal </h5>
          <h5> and professional development of a mentee </h5>
          <h5>through the sharing of knowledge, expertise and experience.</h5>
          <br />
          <br />
          <button onClick={this.buttonHandler}>
            {" "}
            Click Here To Get Mentor{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card text-white bg-dark mb-3 profilecard1">
            <div className="card-body">
              <h4 className="card-title">
                You Got Mentor With following Details:
              </h4>
              <p className="card-text">
                Mentor Id :- {this.state.assignedMentor.mentorId}{" "}
              </p>
              <p className="card-text">
                First Name :- {this.state.assignedMentor.mentorFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.assignedMentor.mentorLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.assignedMentor.mentorEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.assignedMentor.mentorMoNo}{" "}
              </p>
              <p className="card-text">
                D.O.B. :- {this.state.assignedMentor.mentorDob}{" "}
              </p>
              <p className="card-text">
                Joining date :- {this.state.assignedMentor.mentorJoinYear}{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AssignedMentorCard;
