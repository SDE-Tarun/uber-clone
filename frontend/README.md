# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### How to do two way binding ?
### Steps: -
1. import { useState }  from 'react'
2. Inside functional component create a useStateSnippet :-
const [email, setEmail] = useState('');
Note:- initially value is set to be empty.
3. Now you can use email and setEmail in your JSX like this :-
<input type="email"
 value={email} // empty here 
 onChange={(e) => {
   setEmail(e.target.value)
   } />
// Whenever i change the input field, the email state will be updated.
4. Similarly for password-
const [password, setPassword] = useState('');
<input type="password"
value={password} // empty here
onChange={(e) => {
   setPassword(e.target.value)
   } />
// Whenever i change the input field, the password state will be updated.

### Stop form reloading ?
### Steps: -
<form onSubmit={(e) => {
   e.preventDefault(); // prevent default form submission
   // do something
   }}>
</form>

### When submitting form i am running a function which is preventing the default form submission. This will prevent the page from reloading.
<form onSubmit={(e) => {
   submitHandler(e) // call submitHandler function and passing a event as a parameter
   }}>
</form>

### To save user data in local storage
### Steps:-
1. const [userData, setUserData] = useState({})

2. const submitHandler = (e) => {
   e.preventDefault();
   setEmail(''); // clear the input field after form submission
   setPassword(''); // clear the input field after the form submission
   // To save the data
   const setUserData = {
      email: email,
      password: password
      }
   console.log(userData); // set user data

### How to create context and use it ?
To centralize the data, so that anyone can use this data.
### Steps:-
1. Create a folder in src folder as context inside it create a file as UserContext.jsx
2. In UserContext.jsx file write the following code:-
   type rafce
3. Now I want to wrap the application with this UserContext.
4. Go to main.jsx file -
 <UserContext>
   <App />
   </UserContext>
5. Now I can only see this UserContext in my whole application wherever I go in any page.
6. But I want to show children of UserContext so for that -
  const UserContext = ({children}) => {
   return (
      <div>
      {children}
      </div>
  }
)
7. Now I can see the children of UserContext.
8. Now I want to create a context here so that i can pass data further.
   So I will create a context like this:-
   Also import { createContext } from 'react'
export const UserDataContext = createContext();
10. Now i want to send this UserDataContext to my children so that they can use this context.
So I will wrap my children with this context like this:-
 const UserContext = ({children}) => {
   return (
      <div>
      <UserDataContext.Provider>
       {children}
      </UserDataContext.Provider>
      </div>
  }
)
11. Lets suppose making a data-
const UserContext = ({children}) => {
   const user = 'ABC'
   return (
      <div>
      <UserDataContext.Provider>
       {children}
      </UserDataContext.Provider>
      </div>
   )
  }

  export default UserContext
12. If I want to pass this value-
const UserContext = ({children}) => {
   const user = 'ABC'
   return (
      <div>
      <UserDataContext.Provider value={user}>
       {children}
      </UserDataContext.Provider>
      </div>
   )
  }
  export default UserContext
13. Now If I want to use this context in any children component-
for ex: I want to use it in App.jsx file what I have to do is -
const App = () => {
   import { UserDataContext } from 'path here'
   const ans = useContext(UserDataContext)
   console.log(ans) // I can see the value here of the data i created in UserContext.
} 

### Note:-
In my UseContext.jsx file -
Creating a useState data
const [user, setUser] = useState({
   email:'',
   fullname:{
      firstname:'',
      lastname:''
   }
})
Passing this data-
<UserDataContext.Provider value={ {user, setUser} }>
{children}
</UserDataContext.Provider>

### How to Integrate User Endpoints with React ?
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