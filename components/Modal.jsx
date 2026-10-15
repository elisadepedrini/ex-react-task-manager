import { createPortal } from "react-dom"

export default function Modal({title, content, show, onClose, onConfirm, confirmText = "Conferma"}) {

    if (!show) return null

    return createPortal(
            <div className="modal-container">
                <div className="modal">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>,
            document.body
        )

}