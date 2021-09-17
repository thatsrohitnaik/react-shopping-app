import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterPanel from '../Panel/FilterPanel/FilterPanel';
import Grid from '@material-ui/core/Grid';
import ProductPanel from '../Panel/ProductPanel/ProductPanel';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5px',
  },
}));

export default function Product() {
  const classes = useStyles();

  return <Grid container spacing={3} className={classes.container}> 
          <Grid item xs={2} key={1}> <FilterPanel /> </Grid>
          <Grid item xs={10} key={2}> <ProductPanel/> </Grid>
         </Grid>
}