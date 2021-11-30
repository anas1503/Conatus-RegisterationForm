import React, { useState } from 'react';
import '../form/form.css';

import {
    TextField,
    Button,
    Box,
    InputAdornment, Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Email } from '@material-ui/icons';
import axios from 'axios';
import { useHistory } from 'react-router';
import quest from '../../assets/logo_quest.png';
import banner from '../../assets/banner.png';

 
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: '100%',
        margin: theme.spacing(1, 0),
    },
    menustyle: {
        padding: '.6rem',
    },


}));

const EmailVerifyForm = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [error, setError] = useState({
        email: '',
        otp: '',
    });
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    }

    const onSubmit = () => {
        if (!email) {
            setError({ email: 'Email required', otp: '' });
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError({ email: 'Invalid email', otp: '' });
        } else {
            setDisabled(true);
            setError({ email: '', otp: '' });
            // send otp
            axios.post('https://conatus-registration.herokuapp.com/sendOTP', { email }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setSnackbarMessage('OTP Sent successfully');
                    setOpen(true);
                    setIsOtpSent(true);
                    setDisabled(false);
                } else {
                    setSnackbarMessage('OTP not sent. Please try again');
                    setOpen(true);
                    setDisabled(false);
                }
            }).catch((e) => {
                setSnackbarMessage('OTP not sent. Please try again');
                setDisabled(false);
                setOpen(true);
            });
        }
    };
 

 
    const verifyOtp = () => {
        console.log('inside verify', otp, otp.length);
        if (!otp) {
            setError({ email: '', otp: 'OTP required' });
        } else if (otp <= 99999 || otp > 999999) {
            setError({ email: '', otp: 'OTP should be of 6 digits' });
        } else {
            // verify otp
            setDisabled(true);
            setError({ email: '', otp: '' });
            console.log(otp);
            axios.post('https://conatus-registration.herokuapp.com/verifyOTP', { email, otp: Number(otp) }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setSnackbarMessage('OTP Verified successfully');
                    setOpen(true);
                    localStorage.setItem('email', email);
                    setTimeout(() => {
                        setDisabled(false);
                        history.push('/details');
                    }, 1500);
                } else {
                    setSnackbarMessage('Invalid OTP');
                    setOpen(true);
                    setDisabled(false);
                }
            }).catch((e) => {
                setSnackbarMessage('Invalid OTP');
                setOpen(true);
                setDisabled(false);
            });
        }
    };


    const classes = useStyles();
    return (
        <div className="box">
            <div className="box-primary">
                 <img src={banner} className="ill" height="500px" alt="Illustration"/>
            </div>
            <div className="box-secondary">
                <div className="heading-container">
                    <h2 className="heading" style={{ textAlign: 'center' }}>TEAM CONATUS</h2>
                    <h6 className="heading" style={{ textAlign: 'center', margin: '0' }}>PRESENTS</h6>

                    <img src={quest} style={{marginTop:"3%"}}  height="30px" alt="Illustration"/>

            </div>

                <form>
                    {
                        !isOtpSent && <TextField 
                            error={!!error.email}
                            helperText={!!error.email ? error.email : 'Eg. ayushXXXXXX@akgec.ac.in'}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                            className={classes.inputField}
                            name="email"
                        />
                    }
                    {
                        isOtpSent && <TextField
                            error={!!error.otp}
                            helperText={!!error.otp ? error.otp : ''}
                            autoComplete="off"
                            placeholder="Enter your OTP"
                            label="One Time Password(OTP)*"
                            value={otp}
                            type="number"
                            onChange={(e) => setOtp(e.target.value)}
                            variant="outlined"
                            fullWidth
                            className={classes.inputField}
                            name="otp"
                        />
                    }
                    <Box textAlign='center'>
                        <Button disabled={disabled} fullWidth className="button" variant="contained" color="primary"
                                onClick={!isOtpSent ? onSubmit : verifyOtp} style={{
                            marginTop: '10px',
                            backgroundColor: '#ba381f',
                        }}
                        >
                            {!isOtpSent ? 'Send OTP' : 'Verify OTP'}
                        </Button>
                    </Box>
                </form>
            </div>
            <Snackbar
                open={open}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={1500}
                onClose={handleClose}
                message={snackbarMessage}
            />
        </div>
    );
};

export default EmailVerifyForm;




