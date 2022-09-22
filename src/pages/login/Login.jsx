import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Checkbox, Container, ContainerForm, Form, Input, RememberContainer, Title, Wrapper } from "./styles";


const Login = () => {
  /*
  Enviar la info del usuario al back para chequear si machea con la info del la db
  */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const emailOnChange = (e)=>{
      setEmail(e.target.value)
   }

   const passwordOnChange = (e)=>{
      setPassword((e.target.value))
   }

  const handleSubmit = (e) =>{
    
    e.preventDefault()

  axios
  .post("/api/login", { email, password}) 
  .then((data)=> console.log("dataUser => ", data))
  .catch(error => console.log("error", error))
  } 

    
  return (
    <>
    <Wrapper>
    <Container>
      <ContainerForm>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" required onChange = {emailOnChange} />
          <Input type="password" placeholder="Contraseña" required onChange = {passwordOnChange}/>
          <RememberContainer>
            <Checkbox type="checkbox" remember />
            <p>Recordar mi usuario</p>
          </RememberContainer>
          <Button>Ingresar</Button>
          <Link to="/register">
          <p>Register</p>
          </Link>
        </Form>
      </ContainerForm>
      </Container>
      </Wrapper>
    </>
  );
};

export default Login;
