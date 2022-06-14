import { Button, ButtonGroup, styled, Typography } from '@mui/material';
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment"

const TodoStyle = styled("div")({
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between"
})



const Todo = ({todo}) => {
  return (
    <>
        <TodoStyle>
            <div>
                {todo.isComplete ? (
                    <Typography variant="subtitle1" sx={{textDecoration: "line-through"}} >
                        {todo.name}
                    </Typography>
                ) : (
                    <Typography variant="subtitle1" >
                        {todo.name}
                    </Typography>           
                )}
                
                <Typography variant="body2" sx={{color: "#8f8f8f"}}>
                    Author: Chaoo
                </Typography>
                <Typography variant="body2" sx={{color: "#8f8f8f"}}>
                    Added: {moment(todo.date).fromNow()}
                </Typography>
            </div>
            <div>
                <ButtonGroup size="small" aria-label="outlined primary button group">
                    {todo.isComplete ? (
                        <Button>
                            <CheckCircleIcon color="action" sx={{color: "green"}} />
                        </Button>
                    ) : (
                        <Button>
                            <CheckCircleIcon color="action" />
                        </Button>
                    )}
                    
                    <Button>
                        <CreateIcon color="primary" />
                    </Button>
                    <Button>
                        <DeleteIcon color="secondary" />
                    </Button>
                </ButtonGroup>
            </div>
        </TodoStyle>
    </>
  );
}

export default Todo;
