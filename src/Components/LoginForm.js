import { Link } from "react-router-dom"
import React, { Component } from 'react'
import UserService from "../Services/UserService";
import AdminFunctions from './AdminFunctions'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username : '' , 
            password : '',
            userrole : '',
            isLogin  : '', 
                   }

        this.changeHandler = this.changeHandler.bind(this)
        this.loginHandler=this.loginHandler.bind(this)
    }
    


    changeHandler=(event)=>{
        let nam = event.target.name
        let val = event.target.value
        this.setState({[nam] : val})
    }

    loginHandler=(event)=>{
        event.preventDefault();
        const authUser ={
            userEmail    : this.state.username,
            userPassword : this.state.password,
            userRole     : this.state.userrole,
        }
        UserService.authenticateUser(authUser).then((response)=>{
            const autheticatedUser = response.data;

            if(this.state.userrole === 'admin'){
                alert(JSON.stringify(autheticatedUser))
            }
            if(this.state.userrole==='mentor'){
                alert(JSON.stringify(autheticatedUser))
            }
            if(this.state.userrole==='student'){
                alert(JSON.stringify(autheticatedUser))
            }
        })
        // this.props.history.push('/adminfunctions')
     
}


render(){
    return(
        <div className="container">
        <form className="form-horizontal loginform" >

            <div className="row">
                <div className="col-sm-4">
                </div>
                    <div className="col-sm-8">
                    <h2>Login</h2>
                </div>
            </div>
            

            <div className="form-group">
                <strong className="col-sm-3 control-label">Username : </strong>
                <div className="col-sm-9">
                    <input type="email" placeholder="email@example.com" className="form-control" name= "username" onChange={this.changeHandler} value={this.state.username} required/>
                </div>
            </div>


            <div className="form-group">
                <strong className="col-sm-3 control-label">Password :</strong>
                <div className="col-sm-9">
                    <input type="password" placeholder="********" className="form-control" name="password" onChange={this.changeHandler} value={this.state.password} required/>
                </div>
            </div>



            <div className="form-group">
                <strong className="col-sm-3 control-label">Login As :</strong>
                    <div className="col-sm-3">
                        <input type="radio"  name="userrole" value="admin" onChange={this.changeHandler} /> Admin
                    </div>
                    <div className="col-sm-3">
                        <input type="radio"  name="userrole" value="student" onChange={this.changeHandler} /> Student
                    </div>
                    <div className="col-sm-3">
                        <input type="radio"  name="userrole" value="mentor" onChange={this.changeHandler} /> Mentor
                    </div>
            </div>
            <br/>

            <div className="form-group">
                <div className="row">
                    <div className="col-sm-3">
                    <button className="btn btn-primary btn-block" onClick={this.loginHandler} >Log In</button>
                    </div>
                    <div className="col-sm-6">
                        <Link to="/roles">
                            <button className="btn btn-success ">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-1">
                </div>
                    <div className="col-sm-8">
                        <span>Forgot Password </span>
                </div>
            </div>
        </form> 
    </div> 


)}}

export default LoginForm