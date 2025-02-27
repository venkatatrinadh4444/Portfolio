import styles from "./login.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {toast} from 'react-toastify'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signInWithPopup
} from "firebase/auth";
import {auth,authProvider} from '../../firebase/firebase'
import {useRef} from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const name=useRef(null)
    const password=useRef(null)
    const projectsPage=useNavigate()

    const loginHandler=async ()=> {
        const emailValue=name.current.value
        const passwordValue=password.current.value
        await signInWithEmailAndPassword(auth,emailValue,passwordValue)
        toast("Login Successfull")
        name.current.value=''
        password.current.value=''
        projectsPage('/projects')
    }
    const signUpHanlder=async ()=> {
        const emailValue=name.current.value
        const passwordValue=password.current.value
        createUserWithEmailAndPassword(auth,emailValue,passwordValue)
        toast("Registered Successfully")
        name.current.value=''
        password.current.value=''
        projectsPage('/projects')
    }

    const googleSignInHandler=async ()=> {
        await signInWithPopup(auth,authProvider)
        toast("Login Succesfull")
        projectsPage('/projects')
    }


  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.loginContainer}`}>
        <h1>Log In</h1>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control ref={name} type="email" placeholder="name@example.com" required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control ref={password} type="password" placeholder="Password" required/>
          </FloatingLabel>
          <div
            className={`mt-3 d-flex justify-content-center ${styles.buttons}`}
          >
            <button className="btn btn-success" onClick={loginHandler}>Log In</button>
            <button className="btn btn-primary" onClick={signUpHanlder}>Register</button>
          </div>
        </Form>
        <div className={`text-center mt-4 ${styles.googleBtn}`}>
            <button className="shadow" onClick={googleSignInHandler}>
                <img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="google" width="30px"/>
                <span className="ms-2 fw-semibold">Sign In With Google</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
