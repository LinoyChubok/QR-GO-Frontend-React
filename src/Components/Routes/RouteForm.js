import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles( () => ({
    routeForm: {
        marginLeft: '5%'
    },
    routeName: {
        backgroundColor: 'white',
    },
    routeDistrict: {
        backgroundColor: 'white',
    },
    routeImage : {
        backgroundColor: 'white',
    },
    routeDescription : {
        backgroundColor: 'white',
    },
    formButton: {
        color: '#ffffff',
        borderRadius: '8px',
        marginRight: '10px',
        border: `1px solid #693fd3`,
        background: '#693fd3',
        fontWeight: 'bold',
        textTransform: 'none',
    }
}));

const RouteForm = () => {
    const classes = useStyles();

    return(
        <form className={classes.routeForm}>
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={0}>
                    <Grid>
                        <TextField size="large" className={classes.routeName} label="Route Name" variant="outlined"  />
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid item>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                            <Select native label="District" className={classes.routeDistrict}>
                                <option value="" selected disabled hidden>&nbsp;</option>
                                <option value="Northern District">Northern District</option>
                                <option value="Haifa District">Haifa District</option>
                                <option value="Central District">Central District</option>
                                <option value="Tel Aviv District">Tel Aviv District</option>
                                <option value="Jerusalem District">Jerusalem District</option>
                                <option value="Southern District">Southern District</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid>
                        <TextField label="Image" variant="outlined" className={classes.routeImage}/>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid>
                        <TextField label="Description" multiline rows={3} defaultValue="" variant="outlined" className={classes.routeDescription}/>
                    </Grid>
                </Grid>

                <Grid container item xs={4} spacing={0}>
                    <Grid>
                        <Button variant="contained" size="large" className={classes.formButton}>Save</Button>
                    </Grid>
                </Grid> 
            </Grid>
        </form>
    );
}
export default RouteForm;