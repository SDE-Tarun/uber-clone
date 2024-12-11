# User Authentication API Documentation

# 1. Endpoint: /users/register

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
"\_id": "string",
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
"\_id": "64af9f8c02b1e831f1b5d123",
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

# 2. Endpoint: /users/login

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
"\_id": "string",
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

### 3. Endpoint: `/users/profile`

#### HTTP Method: `GET`

# Description:

This endpoint retrieves the authenticated user's profile.

#### Headers

- **Authorization**: `Bearer <JWT_TOKEN>` (optional if token is stored in cookies)

#### Cookies (Optional)

- **token**: `JWT_TOKEN` (stored automatically on login if not provided in headers)

#### Response

- **200 OK**: Successfully retrieved the user profile.
  {
  "\_id": "string",
  "fullname": {
  "firstname": "string",
  "lastname": "string"
  },
  "email": "string"
  }

# 401 Unauthorized: Missing or invalid token.

{
"message": "Unauthorized"
}

# 4. Endpoint: /users/logout

#### HTTP Method: `GET`

# Description:

This endpoint logs out the authenticated user by clearing the token from cookies and blacklisting it to prevent reuse.

# Headers

Authorization: Bearer <JWT_TOKEN> (optional if token is stored in cookies)

# Cookies (Optional)

token: JWT_TOKEN (stored automatically on login if not provided in headers)

# Response

200 OK: Successfully logged out.

{
"message": "Logged out successfully"
}

# 401 Unauthorized: Missing or invalid token.

{
"message": "Unauthorized"
}

# Captain Authentication API Documentation

# 1. Endpoint: /captains/register

#### HTTP Method : `POST`

# Description:

This endpoint is used to register a new captain with their personal details, email, password, and vehicle information.

### Request Body:

The following fields are required in the request body:

#### Personal Information:

- `fullname.firstname` (string, required, minimum 3 characters): The first name of the captain.
- `fullname.lastname` (string, optional, minimum 3 characters): The last name of the captain.

#### Authentication Information:

- `email` (string, required, valid email format, unique): The email address of the captain.
- `password` (string, required, minimum 6 characters): The password for the captain's account.

#### Vehicle Information:

- `vehicle.color` (string, required, minimum 3 characters): The color of the captain's vehicle.
- `vehicle.plate` (string, required, minimum 3 characters): The plate number of the vehicle.
- `vehicle.capacity` (integer, required, minimum 1): The capacity of the vehicle.
- `vehicle.vehicleType` (string, required, one of `['car', 'motorcycle', 'auto']`): The type of the vehicle.

### Example Request Body:

{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securepassword123",
"vehicle": {
"color": "Red",
"plate": "ABC123",
"capacity": 4,
"vehicleType": "car"
}
}

---

### Response:

#### Success Response:

- **Status Code:** `201 Created`
- **Body:**

  {
  "token": "<JWT_TOKEN>",
  "captain": {
  "\_id": "<CAPTAIN_ID>",
  "fullname": {
  "firstname": "John",
  "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "vehicle": {
  "color": "Red",
  "plate": "ABC123",
  "capacity": 4,
  "vehicleType": "car"
  },
  "status": "inactive"
  }
  }

#### Error Responses:

1. **Validation Errors:**

   - **Status Code:** `400 Bad Request`
   - **Body:**

     {
     "errors": [
     {
     "msg": "Invalid Email",
     "param": "email",
     "location": "body"
     },
     {
     "msg": "First name must be at least 3 characters long",
     "param": "fullname.firstname",
     "location": "body"
     }
     ]
     }

2. **Duplicate Email:**

   - **Status Code:** `400 Bad Request`
   - **Body:**

     {
     "message": "Captain already exists"
     }

3. **Missing Required Fields:**
   - **Status Code:** `400 Bad Request`
   - **Body:**

     {
     "message": "All fields are required"
     }

### Notes:

- Ensure all required fields are provided in the request body.
- The `email` must be unique.
- Passwords are hashed before being stored in the database.
- The `token` generated is a JWT that can be used for authentication in subsequent requests.
