import express, { Request, Response } from "express";

import { getUsers } from "./functions/getUsers";
import { helloWorld } from "./functions/helloWorld";
import { createUser } from "./functions/createUser";
import { getUser } from "./functions/getUser";
import { updateUser } from "./functions/updateUser";
import { deleteUser } from "./functions/deleteUser";

import { createPost } from "./functions/createPost";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', helloWorld);

// user
app.get('/api/users', getUsers);
app.post('/api/users', createUser);
app.get('/api/users/:id', getUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);

// post
app.post('/api/posts', createPost);

app.listen(port, () => {
    console.log(`Listen API Server PORT 3000`);
})
