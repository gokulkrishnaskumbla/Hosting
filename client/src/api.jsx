import axios from "axios";

const api=axios.create({
    baseURL:"https://hosting-1ebg.onrender.com",withCredentials:true
})

export default api
