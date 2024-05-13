
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
// import UpdateDetails from './Components/UpdateProfile/UpdateUserDetails'
// import UserDetails from "./Components/UserDetails/UserDetails";
import UpdateUserDetails from './Components/UpdateProfile/UpdateUserDetails';
import Header from './Components/Header/Header';
import SignupForm from './Components/Form/SignupForm';
import LogInForm from './Components/Form/LoginForm';
import Welcome from './Components/Welcome/Welcome';
// import ResponsePage from './Components/ResponsePage';
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/update" element={<UpdateUserDetails />} />
        {/* <Route path="/response" element={<ResponsePage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //      setUser(user)
  //      console.log(user)
  //     } else {
  //       setUser(null)
  //     }
  //   });
  //   unsubscribe();
  // },[])

  
    