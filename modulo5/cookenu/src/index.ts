import app from "./app"
import UserController from "./endpoints/UserController"

const user = new UserController()

app.post('/signup', user.createUser)
app.post("/login",user.login)
app.get("/user/profile", user.getMyProfile)
app.get("/user/:id", user.getUsersProfile)