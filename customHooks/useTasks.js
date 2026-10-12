import { useEffect, useState } from "react";

export default function useTasks() {

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

        function addTask() {
            return 
        }
        function removeTask() {
            return 
        }
        function updateTask() {
            return 
        }

    return {tasks, addTask, removeTask, updateTask}
}
