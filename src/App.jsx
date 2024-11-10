import "./componets/todo/todo.css"
import Header from "./componets/layout/header"
import Footer from "./componets/layout/footer"
import { Outlet } from "react-router-dom"
const App = () => {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
