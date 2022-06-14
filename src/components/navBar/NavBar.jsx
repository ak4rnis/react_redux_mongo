import React from 'react'
import {AppBar, Typography, Toolbar, Button, styled} from "@mui/material"

import { Link, useNavigate } from 'react-router-dom'

const LinkStyled = styled(Link)({
    color: "#fafafa",
    textDecoration: "none",
})

const Root = styled(Typography)({
    flexGrow: 1
})

const NavBar = () => {
    const history = useNavigate();
    const handleSignOut = () => {
        history('/')
    }
    return(
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Root variant="h4" >
                        <LinkStyled  to="/ds">
                            toDoApp;
                        </LinkStyled>
                        
                    </Root>
                    <Root variant="subtitle2" >
                        Logged in as Chaoo
                    </Root>
                    <Button color="inherit" onClick={() => handleSignOut()}>
                        SignOut
                    </Button>
                    <Button color="inherit" >
                        <LinkStyled to="/signin">
                            SignIn
                        </LinkStyled>
                    </Button>
                    <Button color="inherit">
                        <LinkStyled to="/signup">
                            SignUp
                        </LinkStyled>
                    </Button>
                </Toolbar>
                
            </AppBar>
        </>
    )
}


export default NavBar;