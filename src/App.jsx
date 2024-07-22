
import './App.css'
import GoogleFormAdd from './Componets/GoogleFormAdd/GoogleFormAdd'
import ViewForm from './Componets/ViewForm/ViewForm'
import EditForm from './Componets/EditForm/EditForm'
import { Route, Routes } from 'react-router'
// import Header from './Componets/Header/Header'
import AdminPannel from './Componets/AdminPannel/AdminPannel'

function App() {


  return (
    <>

      {/* <Header /> */}

      <Routes >
        <Route path="/form" element={<GoogleFormAdd />} />
        <Route path='/' element={<AdminPannel />} />
        {/* <Route path="/viewData" element={<ViewForm />} /> */}
        <Route path='/Edit' element={<EditForm />} />
      </Routes>
    </>
  )
}

export default App
