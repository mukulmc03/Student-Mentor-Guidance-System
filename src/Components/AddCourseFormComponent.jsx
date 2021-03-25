import React, { Component } from "react";
import CourseService from "../Services/CourseService";

class AddCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        courseName: "",
        startDate: "",
        endDate: "",
      },

      status: true,

      courseName: "",
      startDate: "",
      endDate: "",
    };
  }

  validationHandler = () => {
    let errors = this.state.errors;
    let formIsValid = true;
    let date = new Date();
    let currentDate = date.getTime();

    //courseName
    if (this.state.courseName === "") {
      formIsValid = false;
      errors.courseName = "Please, enter Course Name";
    } else errors.courseName = null;

    //course Start Date
    if (this.state.startDate === "") {
      formIsValid = false;
      errors.startDate = "Please, select Course Start Date";
    } else if (new Date(this.state.startDate).getTime() < currentDate) {
      formIsValid = false;
      errors.startDate = "Start Date cannot be less than Current Date";
    } else errors.startDate = null;

    //course End Date
    if (this.state.endDate === "") {
      formIsValid = false;

      errors.endDate = "Please, select Course End Date";
    } else if (
      new Date(this.state.endDate).getTime() <
      new Date(this.state.startDate).getTime()
    ) {
      formIsValid = false;
      errors.endDate = "End Date cannot be less than Current Date/ Start Date";
    } else errors.endDate = null;

    this.setState({ errors: errors });
    return formIsValid;
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.validationHandler()) {
      let newCourse = {
        courseName: this.state.courseName,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      };

      alert("Form submitted Successfully!");
      CourseService.addNewCourse(newCourse).then((response) => {
        this.setState({ status: false });
      });
    } else {
      alert("Form has some errors!");
      console.log("Invalid Form" + JSON.stringify(this.state.errors));
    }
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { errors } = this.state;
    if (this.state.status) {
      return (
        <div className="container">
          <form
            className="form-horizontal add-course-form"
            onSubmit={this.submitHandler}
          >
            <h2> Fill Course Details:-</h2>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Course Name*</strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.changeHandler}
                  name="courseName"
                  value={this.state.courseName}
                  placeholder="Course_Name"
                />
                <span className="error">{errors.courseName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Start Date*</strong>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  onChange={this.changeHandler}
                  value={this.state.startDate}
                />
                <span className="error">{errors.startDate}</span>
              </div>
            </div>
            <div className="form-group">
              <strong className="col-sm-3 control-label">End Date*</strong>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  onChange={this.changeHandler}
                  value={this.state.endDate}
                />
                <span className="error">{errors.endDate}</span>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-success ">
                    Add Course
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="card text-white bg-dark mb-3 successupdationcard">
          <div className="card-body">
            <h5 className="card-title">Successfully Added..!!</h5>
          </div>
        </div>
      );
    }
  }
}

export default AddCourseForm;
