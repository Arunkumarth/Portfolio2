import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cv from './components/Cv';
import ProjectsFrame from './components/ProjectsFrame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Cv />}></Route>
        <Route path='/projects' element={ <ProjectsFrame/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
