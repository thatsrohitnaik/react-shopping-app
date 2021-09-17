import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';
import { ProductContext } from '../../../Context/Product/ProductContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cap: { textTransform: 'uppercase' },
  formControl: {
    margin: theme.spacing(3),
    width: '100%',
    margin: '0px',
  },
  buttonFull: {
    width: '100%',
  },
}));

export default function FilterPanel() {
  const classes = useStyles();
  const { product, setFilter, filteredProduct } = useContext(ProductContext);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setFilter(values);
    },
  });

  useEffect(() => {}, [filteredProduct]);
  const fliter = {
    brand: ['Apple', 'Sony', 'Nokia', 'Motorola'],
    color: ['Red', 'White', 'Silver'],
    ram: ['4 GB', '3 GB', '2 GB'],
    storage: ['4 GB', '8 GB', '12 GB', '16 GB'],
  };
  console.log('filteredProduct', filteredProduct);
  const fliterKeys = Object.keys(fliter);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl component="fieldset" className={classes.formControl}>
        {fliterKeys.map((key, index) => {
          const send = fliter[key].map((type, i) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    id={key}
                    name={key}
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={type}
                  />
                }
                label={type}
              />
            );
          });

          return (
            <ExpansionPanel key={key}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.cap}>{key}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormGroup> {send} </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
        <br />
        <Divider />
        <br />
        <Button
          className={classes.buttonFull}
          variant="contained"
          type="submit"
          color="primary"
        >
          {' '}
          Apply{' '}
        </Button>
      </FormControl>
    </form>
  );
}
