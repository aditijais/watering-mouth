import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
          <div className="App">
            <p className='Home--head'>Hey Ya, Welcome to Watering Mouth!!</p>
            <p className='Home--description'>Order delicious Food of your choice at minimal prices and enjoy the best offers .....</p>
            
          </div>
          }
        />
        <Route 
           path="/Home"
           element={
            <Home/>
           }
        />
    </Routes>
    </Router>
  );
}

export default App;
