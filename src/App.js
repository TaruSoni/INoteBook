
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/notes/NoteState';





function App() {

  return (
    
    <NoteState>
      <Router>
        <Navbar/>
        <div className="container">

          <Routes>
            <Route exact path="/" Component={Home}/>
            
            <Route exact path="/about" Component={About}/>
          </Routes>

        </div>
      </Router>  
    </NoteState>  
    
  );
}

export default App;