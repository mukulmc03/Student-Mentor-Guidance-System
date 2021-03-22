import axios from "axios";

const BaseUrl = "http://localhost:8989/FinalProject-v2/courses" ;

class CourseService { 
  
    getAllCourses(){
        return axios.get(BaseUrl);
    }

    addNewCourse(newCourse){
        return axios.post(BaseUrl , newCourse);
    }

    deleteCourse(courseId){
        return axios.delete(BaseUrl+'/'+courseId);
    }
    
}


export default new CourseService()