import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { Button, Checkbox, Container, ContainerRegister, Form, Input, RememberContainer, Title, Wrapper } from './styles'

const Register = () => {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const nameOnChange = ((e)=>{
 
    setName(e.target.value)
})

const emailOnChange = ((e)=>{
 
  setEmail(e.target.value)
})

const passwordOnChange = ((e)=>{
 
  setPassword(e.target.value)
})

const sendForm = (e) => {

  e.preventDefault()

  axios
  .post("/api/register", {name, email, password}) 
  .then((data)=> console.log("dataUser => ", data))
  .catch(error => console.log("error", error))
}

  return (
    <>
    <Wrapper>
    <Container>
      <ContainerRegister>
        <Title>Register</Title>
        <Form onSubmit={sendForm}>
        <Input  type="text" placeholder="Name" required onChange={nameOnChange}/>
          <Input type="email" placeholder="Email" required onChange={emailOnChange}/>
          <Input type="password" placeholder="Contraseña" required onChange={passwordOnChange}/>
          <RememberContainer>
            <Checkbox type="checkbox" remember />
            <p>Recordar mi usuario</p>
          </RememberContainer>
          <Button>Ingresar</Button>
          <p>You allready have an account?</p>
          <Link to="/login">
          <p>Login</p>
          </Link>
        </Form>
      </ContainerRegister>
      </Container>
      </Wrapper>
    </>
      
  
  )
}

export default Register