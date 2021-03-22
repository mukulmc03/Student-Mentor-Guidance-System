
import './App.css'

import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import StudentSignUpForm from './Components/StudentSignUpForm'

import AddCourseForm from './Components/AddCourseForm'
import MentorSignUpForm from './Components/MentorSignUpForm'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Roles from './Components/Roles'
import AdminFunctions from './Components/AdminFunctions'



import ListCourseComponent from './Components/ListCourseComponent'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import SuccessfullRegistration from './Components/SuccessfullRegistration'
import ListOfAllStudents from './Components/ListOfAllStudents'
import ListOfAllMentors from './Components/ListOfAllMentors'
import HomePage from './Components/HomePage'
import MentorFunctions from './Components/MentorFunctions'


function App() {
  return (

    <div>
      <Router>
        <Navbar/>
            <Switch> 
                  <Route path="/home" component= {HomePage}></Route>
                  <Route path="/allcourses" component= {ListCourseComponent}></Route> 
                  <Route path="/login" component= {LoginForm}></Route>
                  <Route path="/studentsignup" component= {StudentSignUpForm}></Route>
                  <Route path="/mentorsignup" component= {MentorSignUpForm}></Route> 
                  <Route path="/addcourse" component= {AddCourseForm}></Route>
                  <Route path="/roles" component= {Roles}></Route>
                  <Route path="/adminfunctions" component= {AdminFunctions}></Route>
                  <Route path="/successfullreg" component= {SuccessfullRegistration}></Route>
                  <Route path="/listofallstudents" component= {ListOfAllStudents}></Route>
                  <Route path="/listofallmentors" component= {ListOfAllMentors}></Route>
                  <Route path="/mentorfunctions" component= {MentorFunctions}></Route>
                  <HomePage/>
            </Switch>
        <Footer/>
      </Router> 
    </div>




/*     <div>
    <Navbar/>
    <ListCourseComponent/>
    <Footer/>
     <ListCourseComponent/>  
 </div>  */
   
  
    /* <LoginForm/>
 <MentorSignUpForm/>
 <AddressForm/>
 <StudentSignUpForm/>*/
   // <AddCourseForm/>
  );
}

export default App;
