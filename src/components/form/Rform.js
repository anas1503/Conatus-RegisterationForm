import React, { useState } from 'react';
import './form.css';
import logo from '../../../src/assets/ill.svg';
import validate from './Validation';
import {
    TextField,
    Button,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ReCAPTCHA from 'react-google-recaptcha';


const useStyles = makeStyles((theme) => ({
    inputField: {
        width: '100%',
        margin: theme.spacing(1, 0),
    },
    menustyle: {
        fontFamily: 'Montserrat',
        padding: '.6rem',
    },


}));

const Rform = () => {
    const [data, setData] = useState({
        name: '',
        rollNumber: '',
        branch: '',
        email: '',
        phoneNumber: '',
        portfolio: '',
        skills: '',
        residence: '',
    });

    const [errors, setErrors] = useState({});


    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const onSubmit = () => {

        setErrors(validate(data));

        if (Object.keys(validate(data)).length === 0) {
            console.log('all well', data);
        } else {
            console.log('error');
        }


    };


    const classes = useStyles();
    console.log(errors);
    return (
        <div className="box">
            <div className="box-primary">
                <img src={logo} className="ill" height="400px" alt="Illustration"/>
            </div>
            <div className="box-secondary">
                <h2 className="heading" style={{ textAlign: 'center' }}>TEAM CONATUS</h2>
                <h6 className="heading" style={{ textAlign: 'center', margin: '0' }}>PRESENTS</h6>
                <h1 className="heading" style={{ textAlign: 'center' }}>QUEST'21</h1>
                <form>
                    <TextField
                        error={!!errors.name}
                        helperText={!!errors.name ? errors.name : ''}
                        autoComplete="off"
                        placeholder="Enter your name"
                        label="Name*"
                        value={data.name}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="name"
                        id="t1"
                    />

                    <TextField
                        error={!!errors.rollNumber}
                        helperText={!!errors.rollNumber ? errors.rollNumber : 'Note: University Roll Number'}
                        autoComplete="off"
                        placeholder="Enter roll number"
                        label="Roll Number*"
                        value={data.rollNumber}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="rollNumber"
                    />

                    <TextField
                        error={!!errors.branch}
                        helperText={!!errors.branch ? errors.branch : ''}
                        autoComplete="off"
                        placeholder="Select your branch"
                        label="Branch*"
                        value={data.branch}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        select
                        className={classes.inputField}
                        name="branch"
                    >
                        <MenuItem className={classes.menustyle} value="CSE">
                            CSE
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CS">
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

                    <TextField
                        error={!!errors.email}
                        helperText={!!errors.email ? errors.email : 'Eg. ayushXXXXXX@akgec.ac.in'}
                        autoComplete="off"
                        placeholder="Enter your email"
                        label="Email*"
                        value={data.email}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="email"
                    />

                    <TextField
                        error={!!errors.phoneNumber}
                        helperText={!!errors.phoneNumber ? errors.phoneNumber : 'Note: It should be of 10 digits. Preferably enter Whatsapp number'}
                        autoComplete="off"
                        placeholder="Enter your phone number"
                        label="Phone Number*"
                        value={data.phoneNumber}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="phoneNumber"
                    />

                    <TextField
                        autoComplete="off"
                        placeholder="Link(codechef,behance,github,portfolio etc)"
                        label="Link to any handle(if any)"
                        value={data.portfolio}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        multiline
                        className={classes.inputField}
                        name="portfolio"
                    />
                    <TextField
                        error={!!errors.skills}
                        helperText={!!errors.skills ? errors.skills : 'Eg. HTML,C++,Designing,ML etc.'}
                        autoComplete="off"
                        placeholder="Enter your skills"
                        label="Skills*"
                        value={data.skills}
                        onChange={(e) => handle(e)}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="skills"
                    />
                    <TextField
                        error={!!errors.residence}
                        helperText={!!errors.residence ? errors.residence : ''}
                        autoComplete="off"
                        placeholder="Select your residence"
                        label="Residence*"
                        value={data.residence}
                        onChange={(e) => handle(e)}
                        select
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="residence"
                    >
                        <MenuItem className={classes.menustyle} value=" Girls Hostel">
                            Girls Hostel
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="Boy Hostel">
                            Boys Hostel
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="Day Scholar">
                            Day Scholar
                        </MenuItem>

                    </TextField>

                    <div className="captcha-box">
                        <ReCAPTCHA
                            size='normal'
                            theme='light'
                            sitekey="6LcXYI8cAAAAAGTeMOaF_hmnAWwPsms8leDEHAcN"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <Box textAlign='center'>
                        <Button fullWidth="true" className="button" variant="contained" color="primary"
                                onClick={onSubmit} style={{
                            marginTop: '10px',
                            backgroundColor: '#e6b938',

                        }}>
                            Submit
                        </Button>
                    </Box>


                </form>


            </div>


        </div>
    );
};

export default Rform;




