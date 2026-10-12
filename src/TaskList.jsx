import { useTasks } from "./contexts/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const { tasks } = useTasks()

    return(
        <>
        <h1>Lista dei Task</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Stato</th>
                    <th>Data di creazione</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((el) => (
                    <TaskRow key={el.id} task={el}/>
                ))}
            </tbody>
        </table>
        
        </>
    )
}