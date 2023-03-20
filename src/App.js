// import './App.css';
import React, { useEffect, useState } from "react";
import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row, Column } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handlerOnClear = (num) => {
    setCurrentNumber('0')
  };

  const addNumber = (num) => {
    setCurrentNumber(prev => `${(prev === '0') ? '' : prev}${num}`)
  };

  const delNumber = () => {
    setCurrentNumber(prev => `${(prev.slice(0,prev.length-1) === '') ? '0' : prev.slice(0,prev.length-1)}`)
  };

  const calculateResult = () => {
    try {
      setCurrentNumber(prev => String(eval(prev)));
      alert('error');

    } catch (error) {
      setCurrentNumber('0');
      alert(error);
    }
   
  };

  return (
    <Container> 
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button name='C' onClick={() => handlerOnClear()}/>
          <Button name='<-' onClick={() => delNumber()}/>
          <Button name='%' onClick={() => addNumber('%')}/>
          <Button name='/' onClick={() => addNumber('/')}/>
        </Row>
        <Row>
          <Button name='7' onClick={() => addNumber('7')}/>
          <Button name='8' onClick={() => addNumber('8')}/>
          <Button name='9' onClick={() => addNumber('9')}/>
          <Button name='x' onClick={() => addNumber('*')}/>
        </Row>
        <Row>
          <Button name='4' onClick={() => addNumber('4')}/>
          <Button name='5' onClick={() => addNumber('5')}/>
          <Button name='6' onClick={() => addNumber('6')}/>
          <Button name='-' onClick={() => addNumber('-')}/>
        </Row>
        <Row>
          <Button name='1' onClick={() => addNumber('1')}/>
          <Button name='2' onClick={() => addNumber('2')}/>
          <Button name='3' onClick={() => addNumber('3')}/>
          <Button name='+' onClick={() => addNumber('+')}/>
        </Row>
        <Row>
          <Button name='.' onClick={() => addNumber('.')}/>
          <Button name='0' onClick={() => addNumber('0')}/>
          <Button name=',' onClick={() => addNumber('.')}/>
          <Button name='=' onClick={() => calculateResult()}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
