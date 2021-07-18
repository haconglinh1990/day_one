import {Box, Button, Grid, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import OtpInput from 'react-otp-input';
import firebase from "firebase";
import {signInWithPhone} from "../../api/Api";
declare const window: any;

const PhoneVerify = (props: any) => {
  const history = useHistory();
  const [otp, setOtp] = useState('')

  const changeOtp = async (otp: string) => {
    // console.log(otp)
    setOtp(otp)
    if(otp.length === 6){
      try {
        const result = await window.confirmationResult.confirm(otp)
        setOtp('')
        alert("Correct OPT Code")
        // console.log("Login successful", result )
      } catch (e) {
        setOtp('')
        alert("Wrong OPT Code")
        // console.log("Wrong OPT Code", e )
      }
    }
  }
  const reSendCode = async () => {
    const captcha = new firebase.auth.RecaptchaVerifier('resend-button', {size: 'invisible'})
    const confirmationResult = await signInWithPhone(props.location.state.phone, captcha)
    console.log("result", confirmationResult)
    if(confirmationResult?.verificationId){
      alert("OTP code had been resend successful")
    }
  }
  const mess = `A code has been sent to ${props?.location?.state?.phone} via SMS`
  return (
    <Grid item
          xs={12} md={8} lg={4} xl={4}
          direction={'column'}
          container
          alignItems={'center'}
          >
      <Box margin={10}>
        <Typography variant="h4" align={'center'}  >
          Please enter verification code.
        </Typography>
      </Box>
      <OtpInput
        inputStyle={{width: "40px", height: "40px", margin: '8px'}}
        value={otp}
        onChange={changeOtp}
        numInputs={6}
        shouldAutoFocus
        hasErrored
      />
      <Box m={2}>
        <Typography variant="subtitle1" align={'center'} >
          {mess}
        </Typography>
      </Box>
      <Button href="#text-buttons" color="primary" id={'resend-button'} onClick={reSendCode}>
        RESEND CODE
      </Button>

      <Button href="#text-buttons" onClick={() => history.push("/register")}>
        REGISTER WITH ANOTHER NUMBER
      </Button>
    </Grid>
  )
}

export default PhoneVerify
