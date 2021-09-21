import React from "react";
import './form.css';
import {
  TextField,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import logo from '../../../src/assets/login_bg.jpg';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Form = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="box">
      <div className="box-primary">
        <img src={logo} height="300px" alt="" />
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>

        
          {/* 1) TextField */}
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="firstName"
            inputRef={register({
              required: "First Name is required.",
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />

          {/* 2) TextField */}
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="lastName"
            inputRef={register({
              required: "Last Name is required.",
            })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />

          {/* 3) TextField */}
          <TextField
            placeholder="Enter Your E-mail Address"
            label="E-mail"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="email"
            inputRef={register({
              required: "E-mail Address is required.",
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register({
              required: "Phone Number is required.",
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />

          

          {/* Radio Buttons */}
          <FormControl
            className={classes.inputField}
            error={Boolean(errors.gender)}
          >
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

     <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;