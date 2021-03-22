import axios from "axios";

const BaseUrl = "http://localhost:8989/FinalProject-v2/students" ;

class StudentService { 

    registerNewStudent(courseId , newStudnet){
        return axios.post(BaseUrl +"/"+courseId , newStudnet);
    }

    
}


export default new StudentService()