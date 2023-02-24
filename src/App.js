import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoanApplicationForm from './components/LoanApplicationForm/LoanApplicationForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<LoanApplicationForm/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
