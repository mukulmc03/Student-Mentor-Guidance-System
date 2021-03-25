import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";
import ListCourseComponent from "./ListCourseComponent";
import ListOfAllMentors from "./ListOfAllMentorsComponent";
import StudentSignUpForm from "./StudentSignUpFormComponent";
import AdminProfileCard from "./AdminProfileCardComponent";
import AdminForm from "./AdminFormComponent";
import ListOfAdmins from "./ListOfAdminsComponent";
import MentorSignUpForm from "./MentorSignUpFormComponent";
import AddCourseForm from "./AddCourseFormComponent";
import ListOfAllStudents from "./ListOfAllStudentsComponent";

class AdminFunctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),

      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: true,
      adminReg: false,
      studentReg: false,
      mentorReg: false,
      manageAdmin: false,
      addCourse: false,
    };
    this.cUpdationHandler = this.cUpdationHandler.bind(this);
    this.sUpdationHandler = this.sUpdationHandler.bind(this);
    this.mUpdationHandler = this.mUpdationHandler.bind(this);
  }

  cUpdationHandler = (event) => {
    this.setState({
      cUpdation: true,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  sUpdationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: true,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  mUpdationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: true,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  viewProfileHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: true,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  adminRegistrationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: true,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  studentRegHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: true,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  mentorRegHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: true,
      addCourse: false,
    });
  };

  manageAdminHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: true,
      mentorReg: false,
      addCourse: false,
    });
  };
  addCourseHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: true,
    });
  };
  logOutHandler = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <Header title="Student / Mentor Management:" />

        <div className="dropdown">
          <button className="dropbutton">Profile</button>
          <div className="dropdown-content">
            <Link onClick={this.viewProfileHandler}>
              <span>View Profile</span>
            </Link>
            <Link onClick={this.deleteHandler}>
              <span>Delete Account</span>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbutton">Course Management</button>
          <div className="dropdown-content">
            <Link>
              <span onClick={this.addCourseHandler}>Add Course</span>
            </Link>
            <Link>
              <span onClick={this.cUpdationHandler}>Manage Courses</span>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbutton">Student Management</button>
          <div className="dropdown-content">
            <Link>
              <span onClick={this.studentRegHandler}>
                Student Registration{" "}
              </span>
            </Link>
            <Link>
              <span onClick={this.sUpdationHandler}>Manage Students</span>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbutton">Mentor Management</button>
          <div className="dropdown-content">
            <Link>
              <span onClick={this.mentorRegHandler}>Mentor Registration</span>
            </Link>
            <Link>
              <span onClick={this.mUpdationHandler}>Manage Mentors</span>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">Admin</button>
          <div className="dropdown-content">
            <Link>
              <span onClick={this.adminRegistrationHandler}>
                Admin Registration
              </span>
            </Link>
            <Link>
              <span onClick={this.manageAdminHandler}>Manage Admins</span>
            </Link>
          </div>
        </div>

        <Link>
          <button className="admin-logout" onClick={this.logOutHandler}>
            LOGOUT
          </button>
        </Link>

        {this.state.sUpdation ? <ListOfAllStudents /> : null}
        {this.state.mUpdation ? <ListOfAllMentors /> : null}
        {this.state.cUpdation ? <ListCourseComponent /> : null}

        {this.state.viewProfile ? (
          <AdminProfileCard data1={this.state.userData.adminId} />
        ) : null}

        {this.state.adminReg ? <AdminForm /> : null}

        {this.state.studentReg ? <StudentSignUpForm data="fromAdmin" /> : null}

        {this.state.mentorReg ? <MentorSignUpForm data="fromAdmin" /> : null}

        {this.state.manageAdmin ? <ListOfAdmins /> : null}

        {this.state.addCourse ? <AddCourseForm /> : null}
      </div>
    );
  }
}

export default AdminFunctions;

//{this.state.studentReg ? <StudentSignUpForm/> : null }
