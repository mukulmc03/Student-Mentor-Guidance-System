
import React, { Component } from 'react'
import StudentService from '../Services/StudentService';
import CourseService from '../Services/CourseService';

class StudentSignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            courses : [ ] ,
            courseId : '' ,

		studentFirstName:    '' ,      
		studentLastName :    '' ,    
		studentEmail    :    '' ,     
		studentPassword :    '' ,    
		studetMobileNo  :    '' ,     
		studentDob      :    '' ,
		studentGender   :    '' ,      
		studentMarks    :    '' ,   
        
        
        addressLine1 : '',
		addressLine2 : '',
		area        :  '' ,
		city        : '' ,
		state       : 'Maharashtra' ,
		country     :  'India' ,
		pinCode     :  '' ,
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler=(event)=>{
        let nam = event.target.name
        let val = event.target.value
        this.setState({ [nam] : val })
       
    }

    submitHandler=(event)=>{
        event.preventDefault();
        let newStudent = {
            student : {
                studentFirstName:    this.state.studentFirstName ,      
                studentLastName :    this.state.studentLastName  ,    
                studentEmail    :    this.state.studentEmail     ,     
                studentPassword :    this.state.studentPassword  ,    
                studetMobileNo  :    this.state.studetMobileNo   ,     
                studentDob      :    this.state.studentDob       ,
                studentGender   :    this.state.studentGender    ,      
                studentMarks    :    this.state.studentMarks     ,  
            },
            address:{
                addressLine1: this.state.addressLine1,
                addressLine2: this.state.addressLine2,
                area        : this.state.area        , 
                city        : this.state.city        ,
                state       : this.state.state       , 
                country     : this.state.country     , 
                pinCode     : this.state.pinCode     , 
            }
        }
        console.log(JSON.stringify(newStudent))
        StudentService.registerNewStudent(this.state.courseId , newStudent).then( (response) =>{
            this.props.history.push('/successfullreg')
        })
    }

    componentDidMount(){
        CourseService.getAllCourses().then((response) =>{
            this.setState(  {courses : response.data} )
        })

    }



    render(){
        return(
    
        <div className="container">
            <form className="form-horizontal student-signup-form"  onSubmit={this.submitHandler}>


                <h2> Student <br/>Registration</h2>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">First Name*</strong>
                    <div className="col-sm-9">
                        <input type="text" placeholder="First Name" className="form-control" name="studentFirstName" onChange={this.changeHandler} value={this.state.studentFirstName} />
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Last Name*</strong>
                    <div className="col-sm-9">
                        <input type="text" placeholder="Last Name" className="form-control" name="studentLastName" onChange={this.changeHandler}  value={this.state.studentLastName}/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Email* </strong>
                    <div className="col-sm-9">
                        <input type="email" placeholder="Email" className="form-control" name= "studentEmail" onChange={this.changeHandler} value={this.state.studentEmail}/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Password*</strong>
                    <div className="col-sm-9">
                        <input type="password" placeholder="Password" className="form-control" name="studentPassword" onChange={this.changeHandler} value={this.state.studentPassword}/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Confirm Password*</strong>
                    <div className="col-sm-9">
                        <input type="password" placeholder="Password" className="form-control"/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Date of Birth*</strong>
                    <div className="col-sm-9">
                        <input type="date" className="form-control" name="studentDob" onChange={this.changeHandler} value={this.state.studentDob} />
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Mobile number* </strong>
                    <div className="col-sm-9">
                        <input type="phoneNumber" placeholder="Phone number" className="form-control" name="studetMobileNo" onChange={this.changeHandler} value={this.state.studetMobileNo}/>
                        <span className="help-block">Your phone number won't be disclosed anywhere </span>
                    </div>
                </div>

                <div className="form-group">
                    <strong className="control-label col-sm-3">Gender*</strong>
                    <div className="col-sm-6">
                        <div className="row">
                        <div className="col-sm-4">
                            <label className="radio-inline">
                            <input type="radio" name="studentGender" value="MALE" onChange={this.changeHandler}/> Male
                            </label>
                        </div>

                        <div className="col-sm-5">  
                            <label className="radio-inline">                          
                            <input type="radio" name="studentGender" value="FEMALE" onChange={this.changeHandler}/> Female
                            </label>   
                        </div>
   
                        </div>
                    </div>
                </div> 


{/*                 <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <span className="help-block">*Required fields</span>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-3">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                        <div className="col-sm-6">
                        <button className="btn btn-success ">Back to login</button>
                        </div>
                    </div>
                </div> */}
           



                <h4> Address Details:-</h4>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Address*</strong>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Address_line" className="form-control" name="addressLine1" onChange={this.changeHandler} value={this.state.addressLine1}/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Address_line2*</strong>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Address_line2" className="form-control" name="addressLine2" onChange={this.changeHandler} value={this.state.addressLine2} />
                    </div>
                </div>


                <div className="form-group">
                <div className="row">
                        <div className="col-sm-4">
                            <strong className="col-sm-3 control-label" >Country* </strong>
                        </div> 
                        <div className="col-sm-4">
                            <strong className="col-sm-2 control-label" >State* </strong>
                        </div>   
                </div>            
                            
                <div className="row">
                    <div className="col-sm-4">
                        <input type="email" placeholder="Country" className="form-control" name= "country" disabled value="India" />
                    </div>
                    <div className="col-sm-4">
                                <input placeholder="State" className="form-control" name="state" disabled value="Maharashtra"  />
                    </div>       
                </div>
                </div>

                <div className="form-group">
                <div className="row">
                        <div className="col-sm-4">
                            <strong className="col-sm-3 control-label">City* </strong>
                        </div> 
                        <div className="col-sm-4">
                            <strong className="col-sm-2 control-label">Area* </strong>
                        </div>   
                </div>            
                            
                <div className="row">
                    <div className="col-sm-4">
                        <input placeholder="City" className="form-control" name= "city" onChange={this.changeHandler} value={this.state.city}/>
                    </div>
                    <div className="col-sm-4">
                        <input placeholder="Area" className="form-control" name= "area" onChange={this.changeHandler} value={this.state.area}/>
                    </div>       
                </div>
                </div>


                <div className="form-group">
                <div className="row">
                        <div className="col-sm-4">
                            <strong className="col-sm-3 control-label">PinCode* </strong>
                        </div> 
                </div>
                <div className="col-sm-4">
                        <input type="number" max="999999" placeholder="ex.(444604)" className="form-control" name= "pinCode" onChange={this.changeHandler} value={this.state.pinCode} />
                </div>
                </div>



                <h4> Select Course :-</h4>

             <table className="table table-striped table-bordered" >
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Start_Date</th>
                            <th scope="col">Start_Date</th>
                            <th scope="col"> </th>
        
                            </tr>
                        </thead>
  
                    <tbody>
                        {
                            this.state.courses.map(course => 
                                <tr key={course.courseId}>
                                <td>{course.courseName}</td>
                                <td>{course.startDate}</td>
                                <td>{course.endDate}</td>
                                <td> <input type="radio" value={course.courseId} name="courseId" onChange={this.changeHandler} /> </td>
                                </tr>
                            )}
                
                    </tbody>
                    </table>



                    <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <span className="help-block">*Required fields</span>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-3">
                        <button type="submit" className="btn btn-primary btn-block" >Register</button>
                        </div>
                        <div className="col-sm-6">
                        <button className="btn btn-success ">Back to login</button>
                        </div>
                    </div>
                </div>
           
            </form> 
            
        </div> 


            
)
}
}

export default StudentSignUpForm