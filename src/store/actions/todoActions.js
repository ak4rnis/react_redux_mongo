import axios from "axios"

import { url } from "../../api"

export const addTodo = (todo) => {
    return (dispatch, getState) => {
        axios.post(`${url}/todos`, todo)
        .then(todo => {
            dispatch({
                type: "ADD_TODO",
                todo
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
}

export const getTodos = () => {
    return (dispatch) => {
        axios.get(`${url}/todos`)
        .then(todos => {
            dispatch({
                type: "GET_TODOS",
                todos
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
}