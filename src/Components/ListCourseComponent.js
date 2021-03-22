import React, { Component } from 'react'
import CourseService from '../Services/CourseService';
import { Link } from "react-router-dom"

import Header from './Header';


class ListCourseComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            courses : [ ]
        }
 
        this.deleteCourse=this.deleteCourse.bind(this)
    }

    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then(res => {
            this.setState({courses : this.state.courses.filter(a => a.courseId != courseId)})
        })
    }


    
    componentDidMount(){
        CourseService.getAllCourses().then((response) =>{
            this.setState(  {courses : response.data} )
        })
    }
    




    render() {
        return (
            <div>

                
                <Header title={"Course List"}/>

                <Link to="/addcourse">
                <button  className="btn btn-secondary btn-lg" >Add New Course</button>
                </Link>




                <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course_Name</th>
                            <th scope="col">Start_Date</th>
                            <th scope="col">Start_Date</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
  
                    <tbody>
                        {
                            this.state.courses.map(course => 
                                <tr key={course.courseId}>
                                <th>{course.courseId}</th>
                                <td>{course.courseName}</td>
                                <td>{course.startDate}</td>
                                <td>{course.endDate}</td>
                                <td><button onClick={()=>this.deleteCourse(course.courseId)} > Delete </button></td>
                                </tr>
                            )}
                
                    </tbody>
                    </table>
            </div>
        )
    }
}


export default  ListCourseComponent