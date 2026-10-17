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

        const addTask = async(newTask) => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask)
            })
            const data = await res.json()

            if (data.success) {
                setTasks(prev => [...prev, data.task] )
            } else {
                throw new Error(data.message)
                
            }

        }

        const removeTask = async(id) => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
                method: "DELETE",})
            const data = await res.json()


            if(data.success) {
                setTasks(tasks.filter(el => el.id !== id))
            } else {
                throw new Error(data.message)
            }
        }


        const updateTask = async(updatedTask) => {
             const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${updatedTask.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedTask)
            })
            const data = await res.json()

            if(data.success) {
                setTasks(prev => prev.map(el => el.id === data.task.id ? data.task : el))
            } else {
                throw new Error(data.message)
            }
        }

    return {tasks, addTask, removeTask, updateTask}
}
