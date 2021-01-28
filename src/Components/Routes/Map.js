import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    map: {
        position: 'absolute',
        top: '30%',
        backgroundColor: 'pink',
        marginTop: '20%'
    },
}));

const Map = () => {
    const classes = useStyles();





    return(
        <div className={classes.map}></div>
    );
}
export default Map;