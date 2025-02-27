import { useData } from "../../context/context";
import { Navigate } from "react-router-dom";
import {toast} from 'react-toastify'

let toastShow=false
const PrivateRoute=({children})=> {
    const {authenticatedUser}=useData()

    if(!authenticatedUser) {
        if(!toastShow)
        toast("You must be logged in to access the projects!")

        toastShow=true

        setTimeout(()=>toastShow=false,10*1000)
        
        return <Navigate to="/login"/>
        
    }

    return children
}
export default PrivateRoute