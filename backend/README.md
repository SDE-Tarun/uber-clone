
# User Authentication API Documentation

# Endpoint: /users/register

# HTTP Method: POST

# Description:
This endpoint allows users to register by providing their details such as first name, last name, email, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned alongside the created user details.

# Request Body:
The request body should be in JSON format with the following structure:

{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (min: 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}

# Response:
Success Response:
Status Code: 201 Created

# Response Body:
{
  "token": "string (JWT)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}

# Validation Errors:
Status Code: 400 Bad Request

# Response Body:
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
  ]
}

# Server Errors:
Status Code: 500 Internal Server Error

# Response Body:
{
  "error": "string (error description)"
}

# Usage Example:
# Request:
http
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

# Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "_id": "64af9f8c02b1e831f1b5d123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

# Notes:
Ensure the JWT_SECRET environment variable is set in your .env file for JWT generation.
Passwords are hashed before being saved to the database for security purposes.
The token can be used for authenticating subsequent requests to protected routes.

# Endpoint: /users/login

# HTTP Method: POST

# Description:
This endpoint is used to log in an existing user.

# Request Body
The request should include the following fields in JSON format:

{
  "email": "string (valid email format)",
  "password": "string (min length: 6)"
}

# Response
200 OK: User logged in successfully.

{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}

# 400 Bad Request: Validation errors.

{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "body"
    }
  ]
}

# 401 Unauthorized: Invalid email or password.

{
  "error": "string (Invalid email or password)"
}