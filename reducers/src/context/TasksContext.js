import {useContext, useReducer, useState} from 'react'
import React from 'react'
import { newTask, deleteTask } from '../actions/TodoActions';
import TodoReducer from '../reducers/TodoReducer';

const AppContext = React.createContext();

const initialState = {
    tasks: [
        {
            id:1,
            title: 'learn React',
            desc: 'it is very important'
        },
        {
            id:2,
            title: 'learn JS',
            desc: 'it is very important'
        },
        {
            id:3,
            title: 'learn Node JS',
            desc: 'it is very important'
        }
    ]
}

const AppProvider = ({children})=> {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    const addTask= (data) => {
        dispatch(newTask(data))
    }
    const removeTask= (id) => {
        dispatch(deleteTask(id))
    }

    const [isOpen, setIsOpen]= useState(false)

    const openForm = () => {
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }

    return(
        <AppContext.Provider value={{
            ...state,
            addTask,
            removeTask,
            openForm,
            isOpen
        }}>
            {children}
        /</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}