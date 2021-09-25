import React, { useState } from "react";
import './form.css';
import logo from '../../../src/assets/ill.svg';
import validate from './Validation';
import {
    TextField,
    Button,
    Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";



const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
    menustyle: {
        fontFamily: "Montserrat",
        padding: ".6rem",
    },
     

}));

const Rform = () => {
    const [data, setData] = useState({
        Name: "",
        RollNo: "",
        Branch: "",
        Email: "",
        PhoneNo: "",
        hackerrank: "",
        Portfolio: "",
        Skills: "",
        Residence: ""
    })

    const [errors, setErrors] = useState({});



    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    const onSubmit = () => {

        setErrors(validate(data));

        if (Object.keys(validate(data)).length === 0) {
            console.log("all well");
        } else {
            console.log("error");
        }


    }



    const classes = useStyles();
    console.log(errors);
    return (
        <div className="box">
            <div className="box-primary">
                <img src={logo} className="ill" height="400px" alt="Illustration" />
            </div>
            <div className="box-secondary">
                <h2 className="heading" style={{ textAlign: "center" }}>TEAM CONATUS</h2>
                <h6 className="heading" style={{ textAlign: "center", margin: "0" }}>PRESENTS</h6>
                <h1 className="heading" style={{ textAlign: "center" }}>QUEST'21</h1>
                <form >
                    <TextField
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        label="Name*"
                        value={data.Name}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Name"
                        id="t1"

                    />
                    {errors.Name && <p className="error" >{errors.Name}</p>}


                    <TextField
                        autoComplete="off"
                        placeholder="Enter Roll no."
                        label="Roll Number*"
                        value={data.RollNo}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="RollNo"
                    />
                    {errors.RollNo && <p className="error"  >{errors.RollNo}</p>}


                    <TextField
                        autoComplete="off"
                        placeholder="Enter Your branch"
                        label="Branch*"
                        value={data.Branch}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        select
                        className={classes.inputField}
                        name="Branch"
                    >
                        <MenuItem className={classes.menustyle} value="CSE"   >
                            CSE
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CS" >
                            CS
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CSE(ML&AI)">
                            CSE(ML&AI)
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CSE(DS)">
                            CSE(DS)
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CSE(CSIT)">
                            CSIT
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CSE(IT)">
                            IT
                        </MenuItem>
                    </TextField>
                    {errors.Branch && <p className="error"   >{errors.Branch}</p>}

                    <TextField
                        autoComplete="off"
                        placeholder="College email id"
                        label="Email id*"
                        value={data.Email}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Email"
                    />
                    {errors.Email && <p className="error" >{errors.Email}</p>}

                    <TextField
                        autoComplete="off"
                        placeholder="WhatsApp no."
                        label="Phone No.*"
                        value={data.PhoneNo}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="PhoneNo"
                    />
                    {errors.PhoneNo && <p className="error"   >{errors.PhoneNo}</p>}

                    <TextField
                        autoComplete="off"
                        placeholder="Hackerrank username"
                        label="Hackerrank handle*"
                        value={data.hackerrank}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="hackerrank"
                    />
                    {errors.hackerrank && <p className="error"   >{errors.hackerrank}</p>}


                    <TextField
                        autoComplete="off"
                        placeholder="Link(codechef,behance,github,portfolio etc)"
                        label="Link to any handle(if any)"
                        value={data.Portfolio}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        multiline
                        className={classes.inputField}
                        name="Portfolio"
                    />
                    {errors.Portfolio && <p className="error">{errors.Portfolio}</p>}
                    <TextField
                        autoComplete="off"
                        placeholder="HTML,C++,Designing,ML etc."
                        label="Skills*"
                        value={data.Skills}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Skills"
                    />
                    {errors.Skills && <p className="error">{errors.Skills}</p>}
                    <TextField
                        autoComplete="off"
                        placeholder="Residence"
                        label="Residence*"
                        value={data.Residence}
                        onChange={(e) => handle(e)}
                        select
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="Residence"
                    >
                        <MenuItem className={classes.menustyle} value=" Girls Hostel" >
                            Girls Hostel
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="Boy Hostel" >
                            Boys Hostel
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="Day Scholar" >
                            Day Scholar
                        </MenuItem>

                    </TextField>
                    {errors.Residence && <p className="error" >{errors.Residence}</p>}



                    <Box textAlign='center'>
                        <Button fullWidth="true" className="button" variant="contained" color="primary" onClick={onSubmit} style={{
                            marginTop: "30px",
                            backgroundColor: "#e6b938",
                            
                        }}  >
                            Submit
                        </Button>
                    </Box>



                </form>



            </div>


        </div>
    );
};

export default Rform




