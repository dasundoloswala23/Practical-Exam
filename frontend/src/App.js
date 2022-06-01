import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Layouts Publics
import './App.css';
import AllCards from './components/AllCards/AllCards';
import AddCard from './components/AddCard/AddCard';


// Components


function App() {
  
  return (
    <BrowserRouter>
      
          <Routes>

            <Route path='/' element={<AllCards />}/>
            <Route path='/addCard' element={<AddCard />}/>
                

          </Routes>
       
    </BrowserRouter>
  )
}

export default App;