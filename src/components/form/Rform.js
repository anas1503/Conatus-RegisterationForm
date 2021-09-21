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
    Button
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
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Name"
                    />


                    <TextField
                        autoComplete="off"
                        placeholder="Enter Roll no."
                        label="Roll Number"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="RollNo"
                    />


                    <TextField
                        autoComplete="off"
                        placeholder="Enter Your branch"
                        label="Branch"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Branch"
                    />

                    <TextField
                        autoComplete="off"
                        placeholder="College email id"
                        label="Email id"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Email"
                    />

                    <TextField
                        autoComplete="off"
                        placeholder="WhatsApp no."
                        label="Phone No."
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="firstName"
                    />
                    <TextField
                        autoComplete="off"
                        placeholder="Link(codechef,behance,github,portfolio etc)"
                        label="Optional"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="portfolio"
                    />
                    <TextField
                        autoComplete="off"
                        placeholder="HTML,C++,Designing,ML etc."
                        label="Skills"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="portfolio"
                    />
                    <TextField
                        autoComplete="off"
                        placeholder="Residence"
                        label="Residence"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="portfolio"
                    />


                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>

                </form>



            </div>


        </div>
    );
};

export default Rform




