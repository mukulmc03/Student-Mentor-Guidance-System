import axios from "axios";

const BaseUrl = "http://localhost:8989/FinalProject-v2/mentor" ;

class MentorService { 

    registerNewMentor(courseId , newMentor){
        return axios.post(BaseUrl+"/"+courseId , newMentor);
    }

    getAllMentors(){
        return axios.get(BaseUrl);
    }
    
    deleteMentor(mentorId){
        return axios.delete(BaseUrl+"/"+mentorId);
    }
}


export default new MentorService()