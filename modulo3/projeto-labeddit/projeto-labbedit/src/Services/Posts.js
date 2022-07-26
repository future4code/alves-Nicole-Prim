import axios from "axios"
import { BASE_URL } from "../Constants/urls"

 export const createPost = (body, cleanFields) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res)
        cleanFields()
    }).catch((err) => {
        console.log(err.response)
      })
}