import { useGlobalContext } from "../contexts/GlobalContext"
import TaskRow from "../components/TaskRow"
import { useState } from "react"
import { useMemo } from "react"

export default function TaskList() {

    const { tasks } = useGlobalContext()

    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)


    const handleSortBy = (clickedColumn) => {
        if(sortBy === clickedColumn) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(clickedColumn)
            setSortOrder(1)
        }
    }

    // FUNZIONE RIORDINA

    const arrowOrder = sortOrder === 1 ? "↓" : "↑"

    const orderedTasks = useMemo(() => {

        let comparedTask;

        return [...tasks].sort((a, b) => {
            if (sortBy === "title") {
                comparedTask = a.title.localeCompare(b.title)
            } else if (sortBy === "status") {
                const statusOption = ["To do", "Doing", "Done"]
                comparedTask = statusOption.indexOf(a.status) - statusOption.indexOf(b.status)
            } else if (sortBy === "createdAt") {
                comparedTask = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                
            }
            return comparedTask * sortOrder
        })
    }, [tasks, sortBy, sortOrder])

    return(
        <>
        <h1>Lista dei Task</h1>
        <table>
            <thead>
                <tr className="th-clicked-list">
                    <th onClick={() => handleSortBy("title")}>Nome {arrowOrder}</th>
                    <th onClick={() => handleSortBy("status")}>Stato {arrowOrder}</th>
                    <th onClick={() => handleSortBy("createdAt")}>Data di creazione {arrowOrder}</th>
                </tr>
            </thead>
            <tbody>
                {orderedTasks.map((el) => (
                    <TaskRow key={el.id} task={el}/>
                ))}
            </tbody>
        </table>
        
        </>
    )
}