import React, { Component } from "react";
import CourseService from "../Services/CourseService";

class SingleCourseDetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetails: "",
      userStatus: "",
    };
  }

  componentDidMount() {
    if (this.props.userStatus === "student") {
      CourseService.getCourseDetailByStudentId(this.props.data1).then(
        (response) => {
          this.setState({ courseDetails: response.data });
        }
      );
    }
    if (this.props.userStatus === "mentor") {
      CourseService.getCourseDetailByMentorId(this.props.data1).then(
        (response) => {
          this.setState({ courseDetails: response.data });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div className="card text-white bg-dark mb-3 coursedetailcard">
          <div className="card-header">
            Hello {this.props.data2} This Your Course Details:{" "}
          </div>
          <div className="card-body">
            <h5 className="card-title">Course Information:</h5>
            <p className="card-text">
              Course Name :- {this.state.courseDetails.courseName}{" "}
            </p>
            <p className="card-text">
              Course_Id :- {this.state.courseDetails.courseId}{" "}
            </p>
            <p className="card-text">
              Start_Date :- {this.state.courseDetails.startDate}{" "}
            </p>
            <p className="card-text">
              End_Date :- {this.state.courseDetails.endDate}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCourseDetailsCard;
