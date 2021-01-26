import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Route from './Route'
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles( () => ({
  routesList: {
    paddingLeft: '10%',
    paddinRight: '10%',
    minHeight: '500px',
    width: '100%',
    paddingTop: '110px',
  },
  routesContainer: {
    clear: 'both',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
	  justifyContent: 'flex-start',
	  width: '90%',
    height: '90%',
    paddingTop: '80px',
	  paddingBottom: '30px',
  },
  selectDistrict: {
    color: '#ffffff',
    borderRadius: '8px',
    border: `1px solid #693fd3`,
    background: '#693fd3',
    fontWeight: 'bold',
    position: 'absolute',
    right: '20px',
    textTransform: 'none',
  },
  addRoute: {
    fontSize: '65px',
    position: 'fixed',
    bottom: '5%',
	  right: '20px',
	  color: '#693fd3',
	  zIndex: 1,
  }
  }));

const RoutesList = (props) => {
    const classes = useStyles();
    const [routes, setRoutes] = useState([]);

    
  useEffect(() => {
    let data =[];

    const fetchData = async () => {
      try {
        data = await fetch("https://qr-go.herokuapp.com/api/routes").then(res => res.json());
      } catch(err) {
        console.log("error where fetching data");
      }
      console.log(data);
      data.routes.map(route => add({id: route._id, routeName: route.routeName, district: route.district, image: route.image, description: route.description, challengesAmount: route.challengesAmount}))
    }

    fetchData();
  }, []);

  const nextId = (transports = []) => {    
    let max = transports.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
    return ++max;
};

  const add = (newRoute) => {
    setRoutes(prevState => ([
        ...prevState, {
            id: newRoute.id !== null ? newRoute.id : nextId(prevState),
            routeName: newRoute.routeName,
            district: newRoute.district,
            description: newRoute.description,
            image: newRoute.image,
            challengesAmount: newRoute.challengesAmount,
        }])
    )
};


    const eachTransport = (item, index) => {
        return  (<Route key={item.id} index={index} route={item}
                  onClickEditBtn={props.getTransport} onClickDeleteBtn={props.deleteTransport}>                
                </Route>)
      };
  
      return( 
                <div className={classes.routesList}>
                  <Button className={classes.selectDistrict} variant="contained" >Select District<ArrowDropDownIcon/></Button>
                  <div className={classes.routesContainer}>
                  { routes.map(eachTransport) }
                  </div>
                  <AddCircleIcon className={classes.addRoute}/>
                </div>
              
      );   
  }
  export default RoutesList