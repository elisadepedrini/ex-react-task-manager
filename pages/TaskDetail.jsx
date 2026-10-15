import { useGlobalContext } from "../contexts/GlobalContext"
import { useParams } from "react-router-dom"


export default function TaskDetail() {

    const { tasks } = useGlobalContext()
    
    // Trovo la task selezionata
    const { id } = useParams()
    const taskDetails = tasks.find(el => el.id === parseInt(id))

    console.log(taskDetails);

    if (!taskDetails)
        return <p>Caricamento...</p>

    return (
        <>
        <h1>Dettagli della Task: {taskDetails.title}</h1>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrizione</th>
                    <th>Stato</th>
                    <th>Data di creazione</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{taskDetails.title}</td>
                    <td>{taskDetails.description}</td>
                    <td>{taskDetails.status}</td>
                    <td>{new Date(taskDetails.createdAt).toLocaleDateString()}</td>
                </tr>
                
            </tbody>
        </table>

        <button onClick={() => console.log("Elimino task")}>Elimina Task</button>
        </>
    )
}