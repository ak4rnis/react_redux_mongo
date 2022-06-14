import { Button, styled, TextField, Typography } from "@mui/material";

import React from "react";

const FormStyles = styled("form")({
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000"

})

const SignUp = () => {
    return(
        <>
            <FormStyles noValidate autoComplete="off">
                <Typography variant="h5"> signUp; </Typography>
                <TextField sx={{marginTop: "20px"}}
                    id="enter-name"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                />
                <TextField sx={{marginTop: "20px"}}
                    id="enter-email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                />
                <TextField  sx={{marginTop: "20px"}}
                    id="enter-password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                />
                <Button sx={{marginTop: "20px"}} variant="outlined" color="primary" type="submit">
                    SignIn
                </Button>
            </FormStyles>
        </>
    );
}

export default SignUp;