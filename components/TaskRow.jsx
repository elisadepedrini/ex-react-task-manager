import { memo } from "react"
import { Link } from "react-router-dom"

function TaskRow({task}) {

    const color = task.status === "To do" ? "#c1121f" :
    task.status === "Doing" ? "#e9c46a" :
    "#2a928f"

    return (
        <tr>
            <td><Link to={`/task/${task.id}`} className="link-task">{task.title}</Link></td>
            <td style={{backgroundColor: color}}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>

    )
}

export default memo(TaskRow)