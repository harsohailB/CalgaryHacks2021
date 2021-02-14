import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from 'react';
import { Formik, useField, useFormikContext } from 'formik';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "98%",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        padding: "20px",
        backgroundColor: theme.palette.background.default,
    },
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

const CreateErrandPage = () => {
const classes = useStyles();
return (
  <div>
    <Formik
      initialValues={{ 
          name: '', 
          description: '', 
          postTime: '', 
          expiryTime: null, 
          startTime: null, 
          endTime: null,
          poster: '',
        }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
            <Box m={5} pt={2}></Box>
            <Container component="main" maxWidth="sm" className={classes.root}>
                <center>
                    <Typography variant="h3" color="textPrimary">
                    Create An Errand
                    </Typography>
                </center>
                <div className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="name"
                                label="Errand Name"
                                autoComplete="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                                value={values.name}
                                error={values.name.length === 0}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                multiline
                                required
                                fullWidth
                                rows={4}
                                name="description"
                                label="Errand Description"
                                autoComplete="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                                value={values.description}
                                error={values.description.length === 0}
                            />
                        </Grid>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {values.expiryTime === null || values.expiryTime === "" ?
                        <Grid item xs={12}>
                            <KeyboardTimePicker
                                id="startTime"
                                label="Start Time"
                                required
                                className={classes.textField}
                                value={values.startTime}
                                defaultValue={values.startTime}
                                onChange={val => {
                                    setFieldValue("startTime", val);
                                  }}
                                onBlur={handleBlur}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 60,
                                }}
                                error={values.startTime === null || values.startTime === "Invalid Date"}
                            />
                        </Grid>
                        : <div></div>}
                        {values.expiryTime === null ?
                        <Grid item xs={12}>
                            <KeyboardTimePicker
                                id="endTime"
                                label="End Time"
                                required
                                className={classes.textField}
                                value={values.endTime}
                                defaultValue={values.endTime}
                                onChange={val => {
                                    setFieldValue("endTime", val);
                                  }}
                                onBlur={handleBlur}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 60,
                                }}
                                error={values.endTime === null || values.endTime === "Invalid Date"}
                            />
                        </Grid>
                        : <div></div>}
                        {values.startTime === null && values.endTime === null ?
                        <Grid item xs={12}>
                        <KeyboardTimePicker
                                id="expiryTime"
                                label="Expiry Time"
                                required
                                className={classes.textField}
                                value={values.expiryTime}
                                defaultValue={values.expiryTime}
                                onChange={val => {
                                    setFieldValue("expiryTime", val);
                                  }}
                                onBlur={handleBlur}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 60,
                                }}
                                error={values.expiryTime === null || values.expiryTime === "Invalid Date"}
                            />
                        </Grid>
                        : <div></div>}
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Box m={2}></Box>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        All Set
                    </Button>
                </div>
            </Container>
        </form>
      )}
    </Formik>
  </div>
);
};

export default CreateErrandPage;