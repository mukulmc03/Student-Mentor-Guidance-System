import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from './Header';


class MentorFunctions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    
    }



    render(){
        return(

            <div className="container">
            <Header title="Mentor Functions"/>


            <div className="dropdown">
                <button className="dropbutton">Profile</button>
                    <div className="dropdown-content">
                        <Link>
                            <span>View Profile</span>
                        </Link>
                        <Link>
                            <span>Update Profile</span>
                        </Link>
                        <Link>
                            <span>Delete Account</span>
                        </Link>
                    </div>
            </div> 


            <div className="dropdown">
                <button className="dropbutton">Student</button>
                    <div className="dropdown-content">
                        <Link>
                            <span>View Batch Details</span>
                        </Link>
                        <Link>
                            <span>Update Marks of Student</span>
                        </Link>  
                    </div>
            </div> 

            <div className="dropdown">
                <button className="dropbutton">Course</button>
                    <div className="dropdown-content">
                        <Link>
                            <span>Course Detail</span>
                        </Link>
                    </div>
            </div> 


                <Link to="/login">
                    <button className="admin-logout">LOGOUT</button>
                </Link>



    </div>
    )}
}
export default MentorFunctions