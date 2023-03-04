import React, { useState } from 'react'
import { TextField,Button,Paper } from '@mui/material'

export default function Form({addTodo}) {
  const [text, setText] = useState(null)
  const [id, setId] = useState(0)

  const todoCreate = (text) => {
    const todoObj= {text: text, id: id};
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value=null;
  };

  return (
    <Paper style={{ padding: "1em"}}>
      <div style={{ display: "flex", justrifyContent: "center"}}>
        <TextField 
        id="outlined-basic" 
        label="Tarefas" 
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
        />
        <Button 
        variant="text"
        onClick={() => {todoCreate(text)}}
        >add</Button>
      </div>
    </Paper>
  )
}
