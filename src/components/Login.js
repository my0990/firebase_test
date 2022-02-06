import { useState } from "react";
import {auth, db} from "../firebase_config";
import styled from 'styled-components';


const Container = styled.div`
    display: 'flex';
    border: 1px solid black;
    width: 350px;
    height: 381p;
    
`

function Login() {


  return (
    <Container>
      <h1>login 페이지dd</h1>
      
    </Container>
  );
}

export default Login;
