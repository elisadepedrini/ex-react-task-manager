import { useRef, useState } from "react"

export default function AddTask() {

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~"

    // Campi controllati
    const [title, setTitle] = useState("")

    // Campi non controllati
    const descriptionRef = useRef()
    const statusRef = useRef()


    // Titolo senza simboli
    const titleValid = title.split("").every(el => !symbols.includes(el))

    // Submit
    const submit = (e) => {
        e.preventDefault()

        const description = descriptionRef.current.value
        const status = statusRef.current.value


        if ( !title.trim() || !titleValid) {
            alert ("Compila tutti i campi")
            return
        }  console.log(`
            Titolo: ${title};
            Descrizione: ${description};
            Stato: ${status}
            `);      
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
                <option value="to-do">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>

            <button>Aggiungi Task</button>
        </form>
        </>
    )
}