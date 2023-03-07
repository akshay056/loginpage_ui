import { React }  from 'react';
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from 'react-bootstrap';

function App() {
  
  return (     
        <><Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYaeR-i3XTeiKMy5eNtDAt29NfmgC_bRRtUBH2XHi&s'></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <>
    <Login /></></> 
  );
}

export default App;
