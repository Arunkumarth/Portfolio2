import { Route, Routes,HashRouter } from 'react-router-dom';
import Cv from './components/Cv';
import ProjectsFrame from './components/ProjectsFrame';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Cv />}></Route>
        <Route path='/projects' element={ <ProjectsFrame/>} />
      </Routes>
    </HashRouter>
  )
}
export default App;
