import { useState } from "react";
import {auth, db} from "../firebase_config";
import styled from 'styled-components';
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";




const Container = styled.div`
  display: flex;
  width: 100%;
  height: 682px;
  box-sizing: content-box;
  justify-content: center;
  input {
    display: block;
    margin: 0 auto;
    max-width: 300px;
  };
  @media screen and (max-width: 500px){
    height: 100%;
  }
`

const Wrapper = styled.div`
  text-align: center;
  width: 360px;
  height: 320px;
  margin-top: 30px;
  border: 1px solid gray;
  /* 모바일 반응형 디자인 */
  @media screen and (max-width: 500px) { 
        width: 100%;
        border: none;
    }
  h1 {
    margin: 20px 0 40px 0;
  };
  input {
    margin-bottom: 5px;
    width: 80%;
    border-radius: 2.5px;
    border: 1px solid gray;
  }
`


function Login() {
  let navigate = useNavigate();
  const [id,setId] = useState();
  const [password,setPassword] = useState();
  const loginBtnClicked = () =>{ auth.signInWithEmailAndPassword(id,password).then((res)=>{
    console.log("login되었습니다.")
    navigate("/")
  }).catch((e)=>{
    console.log(e)
  })
}

  return (
    <Container>
      <Wrapper>
        <h1>Login 페이지</h1>
        <input type={"email"} placeholder="이메일" onChange={e => {setId(e.target.value)}}/>
        <input type={"password"} placeholder="비밀번호" onChange={e => {setPassword(e.target.value)}}/>
        <Button style={{marginTop:'20px'}} onClick={()=>{loginBtnClicked()}}> 로그인 </Button>
      </Wrapper>

      
    </Container>
  );
}

export default Login;
