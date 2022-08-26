import { Request, Response } from 'express'
import app from './app'
import connection from './connection';
import createUser from './endpoints/createUser';

app.post("/user", createUser);