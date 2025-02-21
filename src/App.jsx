import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddStudents from './components/AddStudents'
import ListStudents from './components/ListStudents'
import UpdateStudents from './components/UpdateStudents'


const myRouter = createBrowserRouter([
  {
    path: '', Component: Dashboard, children: [
      { path: '', Component: ListStudents },
      { path: 'addStudent', Component: AddStudents },
      { path: 'listStudent', Component: ListStudents },
      { path: 'updateStudent', Component: UpdateStudents },
      
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App;
