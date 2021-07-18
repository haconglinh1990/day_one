import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Box, Grid} from '@material-ui/core';
import PhoneRegister from "./screens/Register/PhoneRegister";
import PhoneVerify from "./screens/Verification/PhoneVerification";
import Header from "./components/Header";


const App = () => {
    return (
      <Box>
        <Header />
        <Grid container justifyContent={'center'}>
          <Router>
            <Switch>
              <Route exact path="/" component={PhoneRegister} />
              <Route exact path="/register" component={PhoneRegister} />
              <Route exact path="/verify" component={PhoneVerify} />
            </Switch>
          </Router>
        </Grid>
      </Box>
  );
}

export default App;
