# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### How to Integrate User Endpoints with React
First lets link our UserSignup Page with users/register endpoint 
### Steps :-
1. Go to UserSignup.jsx file, Now I want to create a user with the help of User Signup form.
2. When I submit means click on Create Acoount button, whatever data it is it will go to backend means a post request is sended to the /users/register endpoint and a new user will be created.
3. After this with the data of that user created I want to navigate to the /home route means home.jsx file or page.
4. I have not created a home route so lets create a new home route.
5. Now after creating home route and its page.
6. Let's go to UserSignup.jsx file, now I want to navigate so for that do the following steps: -
   a. Import the useNavigate hook from react-router-dom.
   b. and call useNavigate, const navigate = useNavigate() in functional component
   b. Now use the useNavigate hook to navigate to the /home route.  
7. Now, I have a submitHandler function in UserSignup.jsx file, now I want to run this function when the form is submitted by clicking on the create account button
8. Inside that submitHandler function i will get the data of user.
9. Now Inside that I will remove setUserData() , and replace it with so that i will get data in this form -
   const newUser = ({
    fullname: {
        firstname:firstname,
        lastname:lastname
    },
    email:email,
    password:password
   })
10. Now I will send this data to the backend using post request.
11. For sending this data from frontend to the backend I will install and use axios, npm i axios and import in UserSignup.jsx file.
12. Now the data i have created i will send it to the backend for that:-
    Inside the submitHandler function make it async first I will use axios.post() method to send the data to the backend.
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
URL I have to use multiple times for that I will add this in .env file as VITE_BASE_URL=http://localhost:4000;
13. After newUser going, i will check if(response.status === 201){
   In response.data, we send token and user so,
   const data = response.data;
   Now If i want to use this data or set this user for that I will use context
   Import { UserDataContext } from '../context/UserDataContext'
   After calling of useNavigate function i will -
   const {user, setUser} = React.useContext(UserDataContext); // before that import useContext from 'react'
   Go back to UserContext.jsx file and change array to object i.e. { [user, setUser] } to { {user, setUser} }
   Now after that I will set the user in the context using setUser(data.user)
   Now I can use this user in any component.
   Now finally navigate it to home i.e. navigate('/home');
}

### Now lets link our UserLogin Page with users/login endpoint 
### Steps :-
1. Go to UserLogin.jsx file, Now I want to login a user with the help of User Login form.
2. When I submit means click on Login button, whatever data it is it will go to backend means a post request is sended to the /users/login endpoint and a user gets login.
3. After this with the data of that user logged in I want to navigate to the /home route means home.jsx file or page.
<!-- 4. I have not created a home route so lets create a new home route.
5. Now after creating home route and its page. -->
6. Let's go to UserLogin.jsx file, now I want to navigate so for that do the following steps: -
   a. Import the useNavigate hook from react-router-dom.
   b. and call useNavigate, const navigate = useNavigate() in functional component
   b. Now use the useNavigate hook to navigate to the /home route.  
7. Now, I have a submitHandler function in UserSignup.jsx file, now I want to run this function when the form is submitted by clicking on the create account button
8. Inside that submitHandler function i will get the data of user.
9. Now Inside that I will remove setUserData() , and replace it with so that i will get data in this form -
   const userData = ({
    email:email,
    password:password
   })
10. Now I will send this data to the backend using post request.
11. For sending this data from frontend to the backend I will install and use axios, npm i axios and import in UserSignup.jsx file.
12. Now the data i have created i will send it to the backend for that:-
    Inside the submitHandler function make it async first I will use axios.post() method to send the data to the backend.
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
URL I have to use multiple times for that I will add this in .env file as VITE_BASE_URL=http://localhost:4000;
13. After newUser going, i will check if(response.status === 200){
   In response.data, we send token and user so,
   const data = response.data;
   Now If i want to use this data or set this user for that I will use context
   Import { UserDataContext } from '../context/UserDataContext'
   After calling of useNavigate function i will -
   const {user, setUser} = React.useContext(UserDataContext); // before that import useContext from 'react'
   Go back to UserContext.jsx file and change array to object i.e. { [user, setUser] } to { {user, setUser} }
   Now after that I will set the user in the context using setUser(data.user)
   Now I can use this user in any component.
   Now finally navigate it to home i.e. navigate('/home');
}