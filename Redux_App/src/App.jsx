import { React,useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './utils/redux/action'
function App() {
  const dispatch=useDispatch()
  const users=useSelector(storeData=>storeData.user)
  return (
    <>
      <button onClick={()=>{
        dispatch(fetchData())
      }}>GET DATA</button>
      {users.map((e,i)=>{
        return <fieldset key={i}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      })}
    </>
  )
}

export default App