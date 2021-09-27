import React, { useState } from 'react';
import '../form/form.css';
import logo from '../../../src/assets/ill.svg';
import {
    TextField,
    Button,
    Box,
    InputAdornment, Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Email } from '@mui/icons-material';
import axios from 'axios';
import { useHistory } from 'react-router';


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
            setError({ email: '', otp: '' });
            // send otp
            axios.post('https://conatus-registration.herokuapp.com/sendOTP', { email }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setSnackbarMessage('OTP Sent successfully');
                    setOpen(true);
                    setIsOtpSent(true);
                } else {
                    setSnackbarMessage('OTP not sent. Please try again');
                    setOpen(true);
                }
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
            setError({ email: '', otp: '' });
            console.log(otp);
            axios.post('https://conatus-registration.herokuapp.com/verifyOTP', { email, otp: Number(otp) }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setSnackbarMessage('OTP Verified successfully');
                    setOpen(true);
                    localStorage.setItem('email', email);
                    history.push('/details');
                } else {
                    setSnackbarMessage('Invalid OTP');
                    setOpen(true);
                }
            }).catch((e) => {
                setSnackbarMessage('Invalid OTP');
                setOpen(true);
            });
        }
    };


    const classes = useStyles();
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
                        <Button fullWidth className="button" variant="contained" color="primary"
                                onClick={!isOtpSent ? onSubmit : verifyOtp} style={{
                            marginTop: '10px',
                            backgroundColor: '#e6b938',
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




