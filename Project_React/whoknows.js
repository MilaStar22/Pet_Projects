import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

function App() {
  const [initialState, setInitialState] = useState([]);
useEffect(()=>{
  axios({
  method: 'GET',
  url: 'http://127.0.0.1:3001/api',
}).then(response => {
  setInitialState(response.data.name)
  }, (error) => {
  console.log(error);
});
})

  return (
    <>
      {initialState.length > 0 && initialState.split(" ").map((item) => <h1>{item}</h1>)}
    </>
  );
}

export default App;