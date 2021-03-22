import axios from "axios";

const BaseUrl = "http://localhost:8989/FinalProject-v2/user"

class UserService{
  
   authenticateUser(authUser){
    return axios.post(BaseUrl,authUser);
   }
    
}


export default new UserService()