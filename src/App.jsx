import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./TaskList"
import AddTask from "./AddTask"
import DefaultLayout from "./DefaultLayout"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/addtask" element={<AddTask/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
