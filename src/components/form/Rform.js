import React, { useEffect, useState } from 'react';
import './form.css';
import logo from '../../../src/assets/ill.svg';
import validate from './Validation';
import {
    TextField,
    Button,
    Box,
    InputAdornment,
    Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ReCAPTCHA from 'react-google-recaptcha';
import { AccountCircle, School, Email, Phone, Link, Apps } from '@mui/icons-material';
import { useHistory } from 'react-router';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    inputField: {
        width: '100%',
        margin: theme.spacing(1, 0),
    },
    menustyle: {
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
        recaptcha: '',
    });

    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (!email) {
            history.push('/');
        } else {
            setData(prevState => ({
                ...prevState,
                email: email,
            }));
        }
    }, [history]);


    const handleClose = () => {
        setOpen(false);
    };

    const handle = (e) => {
        const keyName = e.target.name;
        const value = e.target.value;
        setErrors(prevState => ({
            ...prevState,
            [keyName]: '',
        }));
        setData({ ...data, [keyName]: value });
        if (!value) {
            setErrors(prevState => ({ ...prevState, [keyName]: `${keyName} is required` }));
        }
    };

    const handleReCaptcha = (e) => {
        setData(prevState => ({ ...prevState, recaptcha: `conatus${e}admin` }));
        setErrors(prevState => ({ ...prevState, recaptcha: '' }));
    };

    const onSubmit = () => {
        setErrors(validate(data));
        if (Object.keys(validate(data)).length === 0) {
            console.log('all well', data);
            axios.post('https://conatus-registration.herokuapp.com/users', data).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setOpen(true);
                    setData({});
                    localStorage.removeItem('email');
                }
            });
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        error={!!errors.rollNumber}
                        helperText={!!errors.rollNumber ? errors.rollNumber : 'Note: University Roll Number'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <School/>
                                </InputAdornment>
                            ),
                        }}
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
                        <MenuItem className={classes.menustyle} value="CSE(ML/AI)">
                            CSE(ML/AI)
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CSE(DS)">
                            CSE(DS)
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="CS/IT">
                            CS/IT
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="IT">
                            IT
                        </MenuItem>
                    </TextField>

                    <TextField
                        error={!!errors.email}
                        disabled={true}
                        helperText={!!errors.email ? errors.email : 'Eg. ayushXXXXXX@akgec.ac.in'}
                        autoComplete="off"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email/>
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Enter your email"
                        label="Email*"
                        value={data.email}
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name="email"
                    />

                    <TextField
                        error={!!errors.phoneNumber}
                        helperText={!!errors.phoneNumber ? errors.phoneNumber : 'Note: It should be of 10 digits. Preferably enter Whatsapp number'}
                        autoComplete="off"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone/>
                                </InputAdornment>
                            ),
                        }}
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
                        helperText='Hint: Codechef, Behance, Github, Portfolio etc'
                        autoComplete="off"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Link/>
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Enter links here..."
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Apps/>
                                </InputAdornment>
                            ),
                        }}
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
                        <MenuItem className={classes.menustyle} value="Girls Hostel">
                            Girls Hostel
                        </MenuItem>
                        <MenuItem className={classes.menustyle} value="Boys Hostel">
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
                            onExpired={(e) => {
                                setErrors(prevState => ({ ...prevState, recaptcha: 'reCaptcha is required' }));
                                setData(prevState => ({ ...prevState, recaptcha: '' }));
                            }}
                            onErrored={(e) => {
                                setErrors(prevState => ({ ...prevState, recaptcha: 'Invalid reCaptcha' }));
                                setData(prevState => ({ ...prevState, recaptcha: '' }));
                            }}
                            badge='inline'
                            onChange={(e) => {
                                console.log(e);
                                handleReCaptcha(e);
                            }}
                        />
                        {
                            !!errors.recaptcha && <div className="error">{errors.recaptcha}</div>
                        }
                    </div>
                    <Box textAlign='center'>
                        <Button fullWidth className="button" variant="contained" color="primary"
                                onClick={onSubmit} style={{
                            marginTop: '10px',
                            backgroundColor: '#e6b938',
                        }}
                        >
                            Submit
                        </Button>
                    </Box>


                </form>


            </div>
            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
                message="Form Submitted Successfully"
            />
        </div>
    );
};

export default Rform;




