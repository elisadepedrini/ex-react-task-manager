import { createContext, useContext } from "react";
import useTasks from "../customHooks/useTasks"

const GlobalContext = createContext()


function GlobalProvider({children}) {

    const {tasks, addTask, removeTask, updateTask} = useTasks()

    return (
        <GlobalContext.Provider
            value={{tasks, addTask, removeTask, updateTask}}
        >
            {children}
        </GlobalContext.Provider>
    )
}


function useGlobalContext() {

    const context = useContext(GlobalContext)
    return context
}

export {GlobalProvider, useGlobalContext}