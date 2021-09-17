import React, { useContext } from 'react';
import { ProductContext } from '../../../Context/Product/ProductContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../../Other/Card';

export default function ProductPanel() {
  const { filteredProduct } = useContext(ProductContext);
  return (
    <>
      {filteredProduct.length > 0
        ? filteredProduct.map((data, index) => (
            <Grid key={index} container spacing={3}>
              <Grid item xs={12}>
                <Card key={index} data={data} />
              </Grid>
            </Grid>
          ))
        : null}
    </>
  );
}
