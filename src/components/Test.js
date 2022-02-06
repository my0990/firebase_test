import { useState } from "react";
import {auth, db} from "../firebase_config";
import styled from "styled-components";


const Container = styled.div`
  width: 100px;
  height: 200px;
  border: 1px solid black;
`

function Test() {
  const [data,setData] = useState();
  db.collection('test').get().then((res)=>{
    res.forEach(i => {
      setData(i)
    });
  })
  return (
    <div className="App">
      <h1>firebase 테스트</h1>
      <h2>db에서 자료 가져오기</h2>
      <hr />
      {data ? data.data().test : 'data가 없습니다'}
      <Container />
    </div>
  );
}

export default Test;
