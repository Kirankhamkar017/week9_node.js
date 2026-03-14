Project Overview

This project is a RESTful Blog API developed using Node.js and Express.js as part of the Week 9 backend development task.
The API allows users to create, read, update, and delete blog posts using HTTP requests.

Technologies Used

Node.js

Express.js

CORS

Dotenv

Postman (API Testing)

Project Structure

week9
│
├ server.js
├ package.json
├ README.md
├ .env
│
└ src
    ├ controllers
    │ └ postController.js
    ├ routes
    │ └ postRoutes.js
    └ middleware
        ├ auth.js
        └ errorHandler.js

Setup Instructions

Install Node.js

Clone the repository
git clone

Navigate to the project folder
cd week9

Install dependencies
npm install

Run the server
node server.js

The server will start at:
http://localhost:3000

API Endpoints
Health Check

GET /api/health

Get All Posts

GET /api/posts

Create Post

POST /api/posts

Example Request Body:

{
"title": "My First Blog",
"content": "Learning Node.js API"
}

Update Post

PUT /api/posts/

Delete Post

DELETE /api/posts/

Testing

All APIs were tested using Postman.

Features

RESTful API architecture

CRUD operations for blog posts

Express.js routing

Middleware implementation

Error handling



