import axios from "axios";

const BaseUrl = "http://localhost:8989/FinalProject-v2/queries";

class FAQService {
  getAllQueris() {
    return axios.get(BaseUrl);
  }
}

export default new FAQService();
