import React,{useState} from 'react'
import './todoform.css'
const Todoform = () => {
    const [newItem,setNewItem]=useState("")
    const [items,setItems]=useState([]);
    function addItem(){

     if(!newItem){
        alert("Enter an item.")
        return;
     }
     
        const item={
            id:Math.floor(Math.random()*1000),
            value:newItem
        };
        setItems(oldList=>[...oldList,item]);
        setNewItem("");
      
    }
    function deleteItem(id){
        const newArray=items.filter(item=>item.id!==id);
        setItems(newArray);
    }
    

  return (
    <div className='body'>
        <div className='App'>
        {/* 1.Header */}
        <h1>Todo List App</h1>
        {/* 2.Input */}
        <input type="text" placeholder='Enter Your activites todo.....' 
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button onClick={(e)=>addItem()} onKeyDown={e=>e.key==='Enter'? addItem: ''} className='add' >Add Task</button>
        {/* 3.List of  items */}
        <ul>
            {items.map(item=>{
                return(
                    <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)} className='delete-button'>❌</button></li>
                )
            })}
        </ul>
    </div>
    </div>
  )
}

export default Todoform