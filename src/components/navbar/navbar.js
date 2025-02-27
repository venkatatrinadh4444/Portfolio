import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/context";
import {auth} from '../../firebase/firebase'
import {signOut} from 'firebase/auth'
import { toast } from "react-toastify"

function BasicExample() {
  const { authenticatedUser } = useData();

  const signOutHandler=async ()=> {
    await signOut(auth)
    toast("Signed Out Successfully")
  }

  return (
    <Navbar expand="lg" className={`${styles.navContainer}`}>
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-semibold">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.collapse}`}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.linksContainer} ms-auto`}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              Projects
            </NavLink>

            {authenticatedUser ? (
              <NavLink className={`${styles.links}`} onClick={signOutHandler}>Log Out</NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.links} ${styles.active}`
                    : `${styles.links}`
                }
              >
                Log In
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
