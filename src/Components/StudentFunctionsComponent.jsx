import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";
import AssignedMentorCard from "./AssignedMentorCardComponent";
import Header from "./HeaderComponent";
import MentorDetailsCard from "./MentorDetailsCardComponent";
import ProfileInfo from "./ProfileInfoComponent";
import SingleCourseDetailsCard from "./SingleCourseDetailsCardComponent";
import StudentUpdateForm from "./StudentUpdateFormComponent";

class StudentFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),
      viewProfile: true,
      courseCard: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
    };
    this.courseCardHandler = this.courseCardHandler.bind(this);
    this.viewProfileHandler = this.viewProfileHandler.bind(this);
    this.mentorInfoHandler = this.mentorInfoHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.getMentorHandler = this.getMentorHandler.bind(this);
  }

  courseCardHandler = () => {
    this.setState({
      courseCard: true,
      viewProfile: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
    });
  };
  viewProfileHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: true,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
    });
  };
  mentorInfoHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: true,
      getMentor: false,
      updateProfile: false,
    });
  };
  getMentorHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: false,
      getMentor: true,
      updateProfile: false,
    });
  };

  updateHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: true,
    });
  };

  deleteHandler = () => {
    StudentService.deleteStudentByStudentId(this.state.userData.studentId).then(
      (res) => {
        this.props.history.push("/login");
      }
    );
  };
  logOutHandler = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <Header title="Student Functions" />

        <div className="dropdown">
          <button className="dropbutton">Profile</button>
          <div className="dropdown-content">
            <Link onClick={this.viewProfileHandler}>
              <span>View Profile</span>
            </Link>
            <Link onClick={this.updateHandler}>
              <span>Update Profile</span>
            </Link>
            <Link onClick={this.deleteHandler}>
              <span>Delete Account</span>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbutton">Mentor</button>
          <div className="dropdown-content">
            <Link onClick={this.getMentorHandler}>
              <span>Get Metor</span>
            </Link>
            <Link onClick={this.mentorInfoHandler}>
              <span>Mentor Information</span>
            </Link>
            <Link>
              <span>Change Mentor</span>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbutton">Course</button>
          <div className="dropdown-content">
            <Link onClick={this.courseCardHandler}>
              <span>Course Detail</span>
            </Link>
          </div>
        </div>

        <Link to="/login">
          <button className="admin-logout" onClick={this.logOutHandler}>
            LOGOUT
          </button>
        </Link>

        {this.state.courseCard ? (
          <SingleCourseDetailsCard
            userStatus="student"
            data1={this.state.userData.studentId}
            data2={this.state.userData.studentFirstName}
          />
        ) : null}

        {this.state.viewProfile ? (
          <ProfileInfo
            userStatus="student"
            data1={this.state.userData.studentId}
            data2={this.state.userData.studentFirstName}
          />
        ) : null}

        {this.state.mentorInfo ? (
          <MentorDetailsCard data1={this.state.userData.studentId} />
        ) : null}

        {this.state.getMentor ? (
          <AssignedMentorCard data1={this.state.userData.studentId} />
        ) : null}

        {this.state.updateProfile ? (
          <StudentUpdateForm data1={this.state.userData.studentId} />
        ) : null}
      </div>
    );
  }
}
export default StudentFunctions;
