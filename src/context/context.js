
import React, { useContext,useState,useEffect} from 'react'
import { createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth,firestore} from '../firebase/firebase'
import {collection,getDocs} from 'firebase/firestore'


const StoreContext=createContext()

export const ContextProvider=({children})=> {
    const [authenticatedUser,setAuthenticatedUser]
        =useState(null)

    const [projectData,setProjectData]=useState([])

    useEffect(()=>{
        const authUser=onAuthStateChanged(auth,user=>setAuthenticatedUser(user))

        fetchingData()
        
        return ()=>authUser()
    },[])

    const fetchingData=async ()=> {
        const allDocuments=await getDocs(collection(firestore,'projectDetails'))
        const eachDocument=allDocuments.docs.map(eachDoc=>({id:eachDoc.id,...eachDoc.data()}))
        setProjectData(eachDocument) 
    }

    return <StoreContext.Provider value={{authenticatedUser,projectData}}>
        {children}
    </StoreContext.Provider>
}

export const useData=()=> {
    return useContext(StoreContext)
}