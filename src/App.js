import "./App.css";

import LoginForm from "./Components/LoginFormComponent";
import StudentSignUpForm from "./Components/StudentSignUpFormComponent";

import AddCourseForm from "./Components/AddCourseFormComponent";
import MentorSignUpForm from "./Components/MentorSignUpFormComponent";
import Navbar from "./Components/NavbarComponent";
import Footer from "./Components/FooterComponent";
import Roles from "./Components/RolesComponent";
import AdminFunctions from "./Components/AdminFunctionsComponent";

import ListCourseComponent from "./Components/ListCourseComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuccessfullRegistration from "./Components/SuccessfullRegistrationComponent";

import ListOfAllMentors from "./Components/ListOfAllMentorsComponent";
import HomePage from "./Components/HomePageComponent";
import MentorFunctions from "./Components/MentorFunctionsComponent";
import StudentFunctions from "./Components/StudentFunctionsComponent";
import SingleCourseDetailsCard from "./Components/SingleCourseDetailsCardComponent";
import ProfileInfo from "./Components/ProfileInfoComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactsComponent from "./Components/ContactsComponent";
import FAQComponent from "./Components/FAQComponent";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/allcourses" component={ListCourseComponent}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/studentsignup" component={StudentSignUpForm}></Route>

          <Route path="/mentorsignup" component={MentorSignUpForm}></Route>
          <Route path="/addcourse" component={AddCourseForm}></Route>
          <Route path="/roles" component={Roles}></Route>
          <Route path="/adminfunctions" component={AdminFunctions}></Route>
          <Route
            path="/successfullreg"
            component={SuccessfullRegistration}
          ></Route>

          <Route path="/listofallmentors" component={ListOfAllMentors}></Route>
          <Route path="/mentorfunctions" component={MentorFunctions}></Route>
          <Route path="/studentfunctions" component={StudentFunctions}></Route>
          <Route
            path="/coursedetailcard"
            component={SingleCourseDetailsCard}
          ></Route>
          <Route path="/profileinfo" component={ProfileInfo}></Route>
          <Route path="/about" component={AboutComponent} />
          <Route path="/contact" component={ContactsComponent} />
          <Route path="/faq" component={FAQComponent} />

          <HomePage />
        </Switch>
        <Footer />
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
