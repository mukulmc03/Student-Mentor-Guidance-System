import { Link } from "react-router-dom"
import Header from "./HeaderComponent"
import React, { Component } from 'react'

class Roles extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    studentHandler=()=>{
        this.props.history.push('/studentsignup')
    }

    mentorHandler=()=>{
        this.props.history.push('/mentorsignup')
    }


    render(){

    return(
        <div> 

        <div className="container">
           <Header title="Choose Your Role"/>
        </div>

        <div className="container">
            <div className="row student-role">
                <div className="col-sm-7">
                    <h2> Student </h2>
                </div>
                <div className="col-sm-3">
                    <h2> Mentor </h2>
                </div>
            </div>
        </div>
        

        <Link>
        <input type="image" src="https://th.bing.com/th/id/R0bbd37dbfcf2ac9f9a03b2b56ed5af3a?rik=vpFGLWTBczDcug&riu=http%3a%2f%2fhplgit.github.io%2fdoconce%2fdoc%2fpub%2fslides%2ffig%2fwriting1.jpg&ehk=FfJtmtM0gipK3dfyOGNPF%2byf73rMayxHUc4zD35dZik%3d&risl=&pid=ImgRaw" 
        name="submit" alt="Student" className="role-img" onClick={this.studentHandler}/> 
        </Link>

        <Link >
        <input type="image" src="https://th.bing.com/th/id/R24bd4b2a7b82fcd552a6955257a5e8e2?rik=2JpS8hUWnQjB5Q&riu=http%3a%2f%2fwww.apt-dev.com%2fen%2fgraphics%2faudit.jpg&ehk=CJgtzN8ZLSa%2fOJe%2bIrEeuDoejnJ9PW4IM%2fqmNKkvvdg%3d&risl=&pid=ImgRaw" 
        name="submit" alt="Mentor" className="role-img" onClick={this.mentorHandler}/> 
        </Link>
        </div>

    )}}

export default Roles