import { memo } from "react"

function TaskRow({task}) {

    const color = task.status === "To do" ? "red" :
    task.status === "Doing" ? "yellow" :
    "green"

    return (
        <tr>
            <td>{task.title}</td>
            <td style={{backgroundColor: color}}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>

    )
}

export default memo(TaskRow)