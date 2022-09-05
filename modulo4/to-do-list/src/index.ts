import { Request, Response } from 'express'
import app from './app'
import connection from './connection';
import createTask from './endpoints/createTask';
import createUser from './endpoints/createUser';
import editUser from './endpoints/editUser';
import getTaskById from './endpoints/getTaskById';
import getUserById from './endpoints/getUserById';
import getAllUsers from './endpoints/getAllUsers'
import getTaskByUser from './endpoints/getTaskByUser';

app.post("/user", createUser);

app.get("/user/all", getAllUsers)

app.get("/user/:id", getUserById);

app.get("/task", getTaskByUser)

app.post("/task", createTask);

app.put("/user/edit/:id", editUser)

app.get("/task/:id", getTaskById)

