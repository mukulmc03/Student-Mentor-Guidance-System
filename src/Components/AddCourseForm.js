import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CourseService from '../Services/CourseService';

class AddCourseForm extends Component {
    constructor(props) {
        super(props)        
        this.state={
            courseName : '',
            startDate : '',
            endDate : ''
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }


submitHandler=(event)=>{
    event.preventDefault();
    let newCourse = {
        courseName : this.state.courseName,
        startDate : this.state.startDate,
        endDate : this.state.endDate,
    }
    console.log(JSON.stringify(newCourse))
    CourseService.addNewCourse(newCourse).then((response) => {
        this.props.history.push('/adminfunctions')

    })
}


changeHandler=(event)=>{
    let nam = event.target.name
    let val = event.target.value
    this.setState({ [nam] : val })
    
}




render(){
    return(

        <div className="container">
            <form className="form-horizontal add-course-form"  onSubmit={this.submitHandler} >


                <h2> Fill Course Details:-</h2>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Course Name*</strong>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.changeHandler} name="courseName" value={this.state.courseName} placeholder="Course_Name" />
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Start Date*</strong>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" name="startDate" onChange={this.changeHandler} value={this.state.startDate}/>
                    </div>
                </div>
                <div className="form-group">
                    <strong className="col-sm-3 control-label">End Date*</strong>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" name="endDate" onChange={this.changeHandler} value={this.state.endDate}/>
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
                        <button type="submit" className="btn btn-success ">Add Course</button>
                        </div>
                    </div>
                </div>
            </form> 
        </div> 



        
    )}
}

    export default AddCourseForm





