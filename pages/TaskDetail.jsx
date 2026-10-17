import { useState } from "react"
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"


export default function TaskDetail() {

    const { tasks, removeTask, updateTask } = useGlobalContext()

    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    
    
    // FUNZIONE ELIMINA

    // Show modale
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


    // FUNZIONE AGGIORNA

    // Funzione di aggiorna
    const handleUpdate = async(updatedTask) => {
        try{
            await updateTask({id: taskDetails.id, ...updatedTask})
            alert("Task modificata!")
            setShowUpdate(false)
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

        <button className="button-task-detail" onClick={() => setShowDelete(true)}>Elimina Task</button>
        <button className="button-task-detail" onClick={() => setShowUpdate(true)}>Modifica Task</button>

        <Modal 
        title="Conferma eliminazione"
        content="Vuoi davvero eliminare la task?"
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
        confirmText="Elimina"
        />

        <EditTaskModal 
        show={showUpdate}
        onClose={() => setShowUpdate(false)}
        onSave={handleUpdate}
        task={taskDetails}
        />

        </>
    )
}