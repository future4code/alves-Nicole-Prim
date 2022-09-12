import app from "./app"
import {UserController} from "./endpoints/UserController"

const user = new UserController()

app.post('/user/signup', user.createUser)
app.post("/user/login", user.login)
app.get("/user/profile", user.getUser)