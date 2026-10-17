import { useRef, useState } from "react"
import Modal from "./Modal"

export default function EditTaskModal({show, onClose, task, onSave}) {

    const [titleUpdate, setTitleUpdate] = useState(task.title)
    const [descriptionUpdate, setDescriptionUpdate] = useState(task.description)
    const [statusUpdate, setStatusUpdate] = useState(task.status)

    const editFormRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({
            id: task.id,
            title: titleUpdate,
            description: descriptionUpdate,
            status: statusUpdate
        })
    }

    

    if (!show) return null

    return (
        <Modal 
        title= "Modifica Task"
        content={
            <>
            <form ref={editFormRef} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titleUpdate}
                    onChange={(e) => setTitleUpdate(e.target.value)}
                    placeholder="Modifica il titolo della task"
                />
                
                <textarea
                    type="text"
                    value={descriptionUpdate}
                    onChange={(e) => setDescriptionUpdate(e.target.value)}
                    placeholder="Modifica la descrizione della task"
                />

                <p>Modifica lo stato</p>
                <select value={statusUpdate} onChange={(e) => setStatusUpdate(e.target.value)}>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </form>
            </>}
            
        confirmText="Salva"
        onConfirm={() => editFormRef.current.requestSubmit()}
        show={show}
        onClose={onClose}
        />

    )
}