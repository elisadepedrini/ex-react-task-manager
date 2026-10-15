import { useState } from "react"
import Modal from "../components/Modal"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"


export default function TaskDetail() {

    const { tasks, removeTask } = useGlobalContext()

    // Show modale
    const [show, setShow] = useState(false)

    const navigate = useNavigate()
    
    // Trovo la task selezionata
    const { id } = useParams()
    const taskDetails = tasks.find(el => el.id === parseInt(id))

    // Se non trova la task, mostra messaggio
    if (!taskDetails)
        return <p>Task non trovata</p>

    // Funzione di elimina
    const handleDelete = async() => {

        try {
            await removeTask(taskDetails.id)
            alert("Task rimossa!");
            navigate("/")
            
        } catch(error) {
            alert(error.message)
        }
    }



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

        <button className="button-task-detail" onClick={() => setShow(true)}>Elimina Task</button>

        <Modal 
        title="Conferma eliminazione"
        content="Vuoi davvero eliminare la task?"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={handleDelete}
        confirmText="Elimina"
        />

        </>
    )
}