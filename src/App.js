import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar/navbar";
import Home from './components/homePage/home'
import Contact from "./components/contact/contact";
import About from './components/aboutPage/about'
import Skills from "./components/skillsPage/skills";
import Login from "./components/loginPage/login";
import Projects from './components/projectPage/projectPage'
import ProjectDetailPage from "./components/projectDetailPage/projectDetailPage";
import PrivateRoute from "./components/privateRoute.js/privateRoute";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path={"/projects/:id"} element={<PrivateRoute>
          <ProjectDetailPage/>
        </PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Contact/>
      <ToastContainer/>
    </BrowserRouter>
  );
};
export default App;
