import { faker } from '@faker-js/faker';
import express from 'express';
import cors from 'cors';

const PORT = 8000;
const app = express();

class User{
    constructor() {
        this._id = faker.datatype.uuid(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.phone.phoneNumber(),
        this.password = faker.internet.password()
    }
};
class Company{
    constructor() {
        this._id = faker.datatype.uuid(),
        this.name = faker.company.companyName(),
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
};
app.get("/api/users/new", (reg, res) => {
const newUser = new User;
res.json(newUser);
});

res.json(newCompany);

app.get("/api/user/company", (req, res) => {
const newUser = new User;
const newCompany = new Company;
const responseObject = {
    user: newUser,
    company: newCompany,
};
res.json(responseObject);
});

app. listen(8000, () => console.log(`express server running on port 8000`));
app.listen(PORT, console.log(`running away from love on port ${PORT}`))

// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company