import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "../pages/TaskList"
import AddTask from "../pages/AddTask"
import DefaultLayout from "../components/DefaultLayout"
import { GlobalProvider } from "../contexts/GlobalContext"

function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<TaskList/>}/>
            <Route path="/addtask" element={<AddTask/>}/>
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
    </>
  )
}

export default App
