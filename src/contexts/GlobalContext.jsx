import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({children}) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const tasksFetch = async() => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
                const data = await res.json()
                console.log(data);
                setTasks(data)
            } catch (error) {
                console.error(error)
            }
        }

        tasksFetch()
    }, [])

    return (
        <GlobalContext.Provider
            value={{ tasks, setTasks }}
        >
            {children}
        </GlobalContext.Provider>
    )
}


function useTasks() {

    const context = useContext(GlobalContext)
    return context
}

export {GlobalProvider, useTasks}