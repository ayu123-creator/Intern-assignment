
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import FirstPage from './Firstpage';
import SecondPageComponent1 from './SecondPageComponent1';
 import SecondPageComponent2 from './SecondPageComponent2';
import  Container  from '@mui/material/Container';
import '@mui/material/styles';

function App() {
  return (
    <>
  <Router>
      <Container>
        <Routes>
          <Route path="/" Component={FirstPage} />
          <Route path="/second" Component={SecondPageComponent1} />
           <Route path="/second2" Component={SecondPageComponent2} /> 
          </Routes>
          </Container>
          </Router>
        
   
   </>
  );
}

export default App;
