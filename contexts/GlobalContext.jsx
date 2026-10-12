import { createContext, useContext } from "react";
import useTasks from "../customHooks/useTasks"

const GlobalContext = createContext()


function GlobalProvider({children}) {

    const value = useTasks()

    return (
        <GlobalContext.Provider
            value={value}
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