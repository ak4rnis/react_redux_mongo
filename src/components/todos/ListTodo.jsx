import { styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/actions/todoActions';
import Todo from './Todo';

const DivStylesTodos = styled("div")({
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000"
})

const ListTodo = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  return (
    <>
        <DivStylesTodos>
            <Typography variant='h5'>
                {todos.length > 0 ? "theTodos;": "noTodosYet;"}
            </Typography>
            {todos && todos.map((todo) => {
              return(
                <Todo
                  todo={todo}
                  key={todo._id}
                />
              )
            })}
            
        </DivStylesTodos>
    </>
  )
}

export default ListTodo;
