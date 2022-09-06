import app from './app'
import { getAll } from './endpoints/getAll'
import getAllUsers from './endpoints/getAllUsers'
import getAllUserType from './endpoints/getAllUserType'

app.get("/user/all", getAllUsers)

app.get("/user/all/:type", getAllUserType)

app.get("/users", getAll)