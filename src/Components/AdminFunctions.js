import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from "./Header"
import ListCourseComponent from './ListCourseComponent'
import ListOfAllMentors from './ListOfAllMentors';
import StudentSignUpForm from './StudentSignUpForm';
import MentorSignUpForm from './MentorSignUpForm';

class AdminFunctions extends Component {
constructor(props) {
    super(props);
    this.state = {
        cUpdation: true,
        mUpdation: false,
        sUpdation: false
    }
    this.cUpdationHandler = this.cUpdationHandler.bind(this)
    this.sUpdationHandler = this.sUpdationHandler.bind(this)
    this.mUpdationHandler = this.mUpdationHandler.bind(this)
}

cUpdationHandler=(event)=>{
    this.setState({
        cUpdation: true,
        mUpdation: false,
        sUpdation: false })    
}

sUpdationHandler=()=>{
    this.setState({
        cUpdation: false,
        mUpdation: false,
        sUpdation: true })    
}
mUpdationHandler=()=>{
    this.setState({
        cUpdation: false,
        mUpdation: true,
        sUpdation: false })    
}



render(){

     return(
    <div className="container">
            <Header title="Student / Mentor Management:"/>


            <div className="dropdown">
                <button className="dropbutton">Course Management</button>
                    <div className="dropdown-content">
                        <Link to="/addcourse">
                            <span>Add Course</span>
                        </Link>
                        <Link>
                            <span onClick={this.cUpdationHandler}>Delete/Update Course</span>
                        </Link>
                    </div>
            </div> 


            <div className="dropdown">
                <button className="dropbutton" >Student Management</button>
                    <div className="dropdown-content">
                        <Link to="/studentsignup">
                            <span>Student Registration </span>
                        </Link>
                        <Link>
                            <span onClick={this.sUpdationHandler}>Delete/Update Student</span>
                        </Link>  
                    </div>
            </div> 

            <div className="dropdown">
                <button className="dropbutton">Mentor Management</button>
                    <div className="dropdown-content">
                        <Link to="/mentorsignup">
                            <span>Mentor Registration</span>
                        </Link>
                        <Link>
                            <span onClick={this.mUpdationHandler}>Delete/Update Mentor</span>
                        </Link>
                    </div>
            </div> 


                <Link to="/login">
                    <button className="admin-logout">LOGOUT</button>
                </Link>
          
                {this.state.sUpdation ? <StudentSignUpForm/> : null }
                {this.state.mUpdation ? <ListOfAllMentors/> : null }
                {this.state.cUpdation ? <ListCourseComponent/> : null }
       
    </div>
)





}}

export default AdminFunctions