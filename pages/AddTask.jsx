import { useRef, useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function AddTask() {

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~"

    const {addTask} = useGlobalContext()

    // Campi controllati
    const [title, setTitle] = useState("")

    // Campi non controllati
    const descriptionRef = useRef()
    const statusRef = useRef()


    // Titolo senza simboli
    const titleValid = title.split("").every(el => !symbols.includes(el))

    // Submit
    const submit = async(e) => {
        e.preventDefault()


        if ( !title.trim() || !titleValid) {
            alert ("Compila tutti i campi")
            return
        }
        
        const newTask = {
            title: title.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value

        }


        try {
            await addTask(newTask)
            alert("Task aggiunto!")
            setTitle("")
            descriptionRef.current.value = ""
            statusRef.current.value = "To do"

        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <>
        <h1>Aggiungi Task</h1>

        <form onSubmit={submit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Inserisci il titolo della task"
            />
            <strong style={{color: titleValid ? "green" : "red"}}>{titleValid ? "Titolo valido" : "Non può contenere simboli speciali"}</strong>
            <textarea
                type="text"
                ref = {descriptionRef}
                placeholder="Inserisci la descrizione della task"
            />

            <p>Seleziona lo stato</p>
            <select ref={statusRef}>
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>

            <button>Aggiungi Task</button>
        </form>
        </>
    )
}