
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/layout/CommunLayout'



function App() {

  return (
    <>
     
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  )
}

export default App
