import './App.css';
import Read from '../src/component/Read';
import Update from '../src/component/Update';
import Create from '../src/component/Create';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Createtech from './component/Createtech';


function App() {
  return (
    <div className="App">
      <h2>STUDENT FORM</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element={<Create/>} />
        </Routes>
        <Routes>
          <Route exact path='/read' element={<Read/>} />
        </Routes>
        <Routes>
          <Route exact path='/update' element={<Update/>} />
        </Routes>
        <Routes>
          <Route exact path='/teacher' element={<Createtech/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
