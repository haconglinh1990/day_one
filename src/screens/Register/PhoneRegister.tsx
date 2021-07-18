import {Box, Button, Grid, Typography} from "@material-ui/core";
import React from "react";
import FormRegister from "./FormRegister";

const PhoneRegister = () => {
  return (
    <Grid item xs={12} md={6} lg={4} xl={4}>
      <Box marginY={10}>
        <Typography variant="h3" align={'center'}>
          Let's get started!
        </Typography>
      </Box>

      <FormRegister />

      <Box display={'flex'} justifyContent={'center'}>
        <Grid item xs={12} md={10}>
          <Box m={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant="subtitle2">
              ALREADY HAVE AN ACCOUNT?
            </Typography>
            <Button href="#text-buttons" color="primary" onClick={() => alert("Go to login page")}>
              LOG IN
            </Button>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

export default PhoneRegister
