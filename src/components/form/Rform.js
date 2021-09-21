import React from "react";
import './form.css';
import logo from '../../../src/assets/login_bg.jpg';
import {
    TextField,
    // FormControlLabel,
    // FormLabel,
    // FormControl,
    // FormHelperText,
    // RadioGroup,
    // Radio,
    // Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";



const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));

const Rform = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="box">
            <div className="box-primary">
                <img src={logo} height="600px" alt="" />
            </div>
            <div className="box-secondary">
            <form onSubmit={handleSubmit(onSubmit)}>


            <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="firstName"
            />

            </form>

             
    
            </div>


        </div>
    );
};

export default Rform