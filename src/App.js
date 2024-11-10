//import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form1 from './components/Form1.js'
import Form2 from './components/Form2.js'
import React from 'react';

function App() {
  const headerStyle = {
    backgroundColor: 'darkblue', // Hexadecimal color
    padding: '20px',              // Add some padding
    textAlign: 'left',          // Center the text
    border: '1px solid gray',     // Add a border
    color:'white',
    margin:'2px', 
    borderRadius:'14px solid gray'
  }

 



  return (
    <Container>
      <Row>
        <Col xs={12} md={12} sm={12} style={headerStyle}><h3>Expense Calculator</h3></Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Form1  />
        </Col>
        <Col xs={6} md={4}>
          <Form2   />
        </Col>

      </Row>
    </Container>
  );
}

export default App;
