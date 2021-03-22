
import React, { Component } from 'react'
import CourseService from '../Services/CourseService';

class ListOfAllStudents extends Component{
    constructor(props) {
        super(props)
        
        this.state={
            courses : [ ]
        }
    }

    componentDidMount(){
        CourseService.getAllCourses().then((response) =>{
            this.setState(  {courses : response.data} )
        })

    }

    render(){
        return(
  
            <h1> vnfjvh</h1>

)}}


export default ListOfAllStudents
