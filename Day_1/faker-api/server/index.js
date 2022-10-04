import { faker } from '@faker-js/faker';
import express, { application } from 'express';

class User{
    constructor() {
        this._id= faker.datatype.uuid(),
        this.firstName= faker.name.firstName()
    }
}
app.post("/api/users/new", (req, res)) => {
    console.log(req.body)
    let username = req.username
    let firstName = req.firstName
    let lastName = req.body.lastName
    res.status(200).send(`Welcome, ${username}! It is nice to meet you ${firstName} ${lastName}')
}

app.listen(4000, () => console.log("Server running on port 4000"));

// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company