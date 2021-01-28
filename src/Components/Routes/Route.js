import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RoomIcon from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles( () => ({
  card: {
      width: '300px',
      height: '300px',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '5%',

      '&:hover': {
        "& $cardDescription": {
            opacity: 1,
          },
      }
  },
  routeImage: {
      width: "300px",
  },
  cardIcons: {
    verticalAlign: 'middle',
    paddingRight: '5px',
    color:'#693fd3',
  },
  cardDescription: {
    position: 'absolute',
    paddingTop: 60,
    padding: 20,
    background: 'rgba(5,5,5,0.8)',
    width: '100%',
    height: '64.5%',
    color: 'white',
    top: 0,
    left: 0,
    zIndex: 3,
    opacity: 0,
  },
  cardActions: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3,
  },
  cardButton: {
    backgroundColor: 'white',
    color: '#693fd3'
  },
  }));

const Route = (props) => {
    const classes = useStyles();

    const deleteBtn = () => {
      console.log(props.route.id)

      props.onClickDeleteBtn(props.route.id);
    };

    return (
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.cardMedia}>
                <img className={classes.routeImage} src= {props.route.image} alt="route"></img>
                <Typography className={classes.cardDescription}>{props.route.description}</Typography>
                <CardActions className={classes.cardActions}>
                    <NavLink exact to={`/route?id=${props.route.id}`}>
                    <IconButton className={classes.cardButton} size="small">
                        <EditIcon />
                    </IconButton>
                    </NavLink>
                    <IconButton className={classes.cardButton} onClick={deleteBtn} size="small">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </CardMedia>
            <CardContent>
                <Typography ><MapIcon className={classes.cardIcons}/>{props.route.routeName}</Typography>
                <Typography ><RoomIcon className={classes.cardIcons}/>{props.route.district}</Typography>
                <Typography ><AssistantPhotoIcon className={classes.cardIcons}/>{props.route.challengesAmount}</Typography>
            </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }
  export default Route;