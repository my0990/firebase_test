import { useState } from "react";
import {auth, db} from "./firebase_config"

function App() {
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
    </div>
  );
}

export default App;
