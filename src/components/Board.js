import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";
import BigTask from "./BigTask";

const Board = (props) => {
const [showTasks, setShowTasks] = React.useState(true)

  return (

    <div style={{width:'100%', height:'100%'}}>
      { showTasks && <div>
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      <Task onIcon={() => setShowTasks(false)} {...props}/> 
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      </div> }

      { !showTasks && <div style={{height:'100%'}}>
      <BigTask onClose={() => setShowTasks(true)}
      form={props.format}
      />
      </div> }
    </div> 

  )
}


export default Board