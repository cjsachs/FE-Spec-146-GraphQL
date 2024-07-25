import { Routes, Route } from "react-router-dom"
import CreateAlbumForm from "./views/CreateAlbumForm"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateAlbumForm/>}/>
    </Routes>
  )
}
export default App