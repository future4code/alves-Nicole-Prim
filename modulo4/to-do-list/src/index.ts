import { Request, Response } from 'express'
import app from './app'
import connection from './connection';
import createUser from './endpoints/createUser';
import getUserById from './endpoints/getUserById';

app.post("/user", createUser);

app.get("/user/:id", getUserById)