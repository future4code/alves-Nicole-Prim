import axios from "axios"
import { BASE_URL } from "../Constants/urls"

 export const createPost = (body, cleanFields, setRefresh, refresh) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res)
        cleanFields()
        setRefresh(!refresh)
    }).catch((err) => {
        console.log(err.response)
      })
}

export const createComment = (body, id, cleanFields, setRefresh, refresh) => {
axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}).then((res) => {
    console.log(res)
    cleanFields()
    setRefresh(!refresh)

}).catch((err) => {
    console.log(err.response)
})
}