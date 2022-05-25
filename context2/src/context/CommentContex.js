import {useContext, useState} from 'react'
import React from 'react'

const AppContext = React.createContext();
const AppProvider = ({children})=> {
    const [comments,setComments] = useState([
    ]);

    const addComment = (data) => {
        setComments((prevData) => {
            return [data, ...prevData]
        })
    }

    const [isOpen, setIsOpen]= useState(false)

    const openForm = ()=>{
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    
    }
    const closeForm = () => {
        setIsOpen(false)
    }

    return(
        <AppContext.Provider value={{
            comments,
            addComment,
            isOpen,
            openForm,
            closeForm,
        }}>
            {children}
        /</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}