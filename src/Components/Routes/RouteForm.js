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
        position: 'relative',
        marginTop: '1%',
        marginLeft: '5%',
        width: '45%',
        height: '410px',
    },
    formTitle: {
        color: '#693fd3',
        fontSize: '24px',
        fontWeight: '500',
    },
    routeName: {
        backgroundColor: 'white',
        width: 400,
    },
    routeDistrict: {
        backgroundColor: 'white',
        width: 382,

    },
    routeImage : {
        backgroundColor: 'white',
        width: 400,
    },
    routeDescription : {
        backgroundColor: 'white',
        width: 400,
    },
    formButton: {
        width: 150,
        color: '#ffffff',
        borderRadius: '8px',
        marginRight: '10px',
        border: `1px solid #693fd3`,
        background: '#693fd3',
        textTransform: 'none',
    }
}));

const RouteForm = (props) => {
    const classes = useStyles();
    const [route, setRoute] = useState({ id: "", routeName: "", district: "", description: "" , image: "", challengesAmount: null, challenges: []});
    const [title, setTitle] = useState();
    const [buttonText, setButtonText] = useState();

    useEffect(() => { 
        getSpecificRoute();
    }, []);

      const getSpecificRoute = async () => {
        const id = props.routeId  
        if (id !== undefined) {
            let data =[];
            try {
            data = await fetch(`https://qr-go.herokuapp.com/api/routes/${id}`).then(res => res.json());
            } catch(err) {
            console.log("error where fetching data");
            }
            setRoute({ id: data.route._id, routeName: data.route.routeName, district: data.route.district, description: data.route.description , image: data.route.image, challengesAmount: data.route.challengesAmount, challenges: data.route.challenges});
            setTitle("Edit Specific Route");
            setButtonText("Confirm");
      
        }
        else {
            setTitle("Create a New Route");
            setButtonText("Save");     
        }
    }

    return(
        <form className={classes.routeForm}>
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={0}>
                    <Grid>   
                        <h1 className={classes.formTitle}>{title}</h1>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid>
                        <TextField value={route.routeName} size="small" label="Route Name" variant="outlined"
                        inputProps={{ className: classes.routeName }}/>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid item>
                        <FormControl size="small" variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple" >District</InputLabel>
                            <Select value={route.district} native label="District" inputProps={{ className: classes.routeDistrict }} >
                                <option value="" disabled hidden>&nbsp;</option>
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
                        <TextField value={route.image} size="small" label="Image" variant="outlined"
                        inputProps={{ className: classes.routeImage }}/>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <Grid>
                        <TextField value={route.description} size="small" label="Description" multiline rows={3}  variant="outlined"
                         inputProps={{ className: classes.routeDescription }} />
                    </Grid>
                </Grid>

                <Grid container item xs={4} spacing={0}>
                    <Grid>
                        <Button variant="contained" size="large" className={classes.formButton}>{buttonText}</Button>
                    </Grid>
                </Grid> 
            </Grid>
        </form>
    );
}
export default RouteForm;