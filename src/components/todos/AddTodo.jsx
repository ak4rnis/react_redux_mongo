import { Button, TextField, styled } from '@mui/material';
import SendIcon from "@mui/icons-material/Send"
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions';

const FormStyled = styled("form")({
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between"
})

 const AddTodo = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(todo)
        dispatch(addTodo(todo))
        setTodo({
            name: "",
            isComplete: false
        })
    }
  return (
    <>
        <FormStyled noValidate autoComplete='off' onSubmit={handleSubmit} >
            <TextField
                id="enter-todo"
                variant='outlined'
                label="enterTodo"
                autoFocus
                fullWidth
                value={todo.name}
                onChange={(e) => setTodo({...todo, name: e.target.value, date: new Date()})}
            />
            <Button sx={{marginLeft: "20px"}} color="primary" variant="contained" type="submit">
                <SendIcon />
            </Button>
        </FormStyled>
    </>
  )
}

export default AddTodo;
