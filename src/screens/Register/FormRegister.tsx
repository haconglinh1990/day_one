import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {useHistory} from "react-router-dom";
import dialCode from "../../ultils/constance/DialCode";
import {signInWithPhone} from "../../api/Api";
import firebase from "firebase";
declare const window: any;

const FormRegister = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      country: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      country: Yup.string().required('Country is required'),
      phone: Yup.number().required('Phone is required')
    }),
    onSubmit: async (values) => {
      const {country, phone} = values
      const fullNumber = `${country}${phone}`
      try {
        const captcha = new firebase.auth.RecaptchaVerifier('sign-in-button', {size: 'invisible'})
        const confirmationResult = await signInWithPhone(fullNumber, captcha)
        // console.log("result", confirmationResult)
        if(confirmationResult?.verificationId){
          window.confirmationResult = confirmationResult;
          history.push("/verify", {phone: fullNumber})
        } else {
          alert("Invalid phone number")
        }
      } catch (e) {
        alert("Invalid phone number")
        // console.log("signInWithPhone e", e)
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
      <Box m={2}>
        <FormControl variant="outlined" fullWidth error={formik.touched.country && Boolean(formik.errors.country)}>
          <InputLabel id="country">Country</InputLabel>
          <Select
            defaultValue={dialCode[0]}
            labelId="country"
            id="country"
            name="country"
            value={formik.values.country}
            label="Country"
            onChange={formik.handleChange}
          >
            {dialCode.map(code => <MenuItem value={code} key={code}>{code}</MenuItem>)}
          </Select>
          <FormHelperText>{formik.touched.country && formik.errors.country}</FormHelperText>
        </FormControl>
      </Box>
      <Box m={2}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            variant="outlined"
            label="Phone number"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormControl>
      </Box>
      <Box m={2} display={'flex'} justifyContent={'center'}>
        <Grid item xs={12} md={8}>
          <Button fullWidth color="primary" variant="contained" type="submit" id={'sign-in-button'}>
            VERIFY NUMBER
          </Button>
        </Grid>
      </Box>
    </form>
  );
}

export default FormRegister
