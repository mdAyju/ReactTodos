import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [Id,setId]=useState(1)
  const [list,setList]= useState([])
  const [input ,setInput]=useState('')

const added =()=>{
 if (input.length!==0){
  setId(Id+1)
  let inObj = {id:Id,val:input}
  setList([...list,inObj])
  setInput('')
 }
 else{
  alert('enter data')
 }
}

const deleteData = (id)=>{

console.warn(id);
setList(list.filter((res)=>res.id!==id))

}
  return (
    <div className='container mt-3 col-sm-8'>
      <h5 className='text-center'>Ayjas Todo List</h5>
      <hr></hr>
      <div className='search '>
        <input type='text' placeholder='Enter Data' value={input} onChange={(e)=>setInput(e.target.value)} className='form-control ' />
        <button className='btn btn-primary' onClick={()=>added()}>Add</button>
      </div>
      <ul className='list-group mt-3'>
        {
          list.map((data,index)=><li key={index} className='list-group-item'>{data.val} <button className='btn btn-danger float-end' onClick={(e)=>deleteData(data.id)}>X</button></li>)
        }
      </ul>
    </div>
  )
}

export default App