import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardActions, CardMedia, CardContent } from '@mui/material';

const Products = () => {
    const [productData, setProductData] = useState([]);

    const getProducts = async () => {
        let res = await axios.get(`http://localhost:8080/products`);
        let data = res.data;
        setProductData(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Typography variant="h4" align='center'> Products </Typography>

            <br />
            <br />

            <Grid container spacing={3}  >
                {productData?.map((prod, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={4} >
                        <Card sx = {{height : "100%"}}>
                            <CardMedia
                                component="img"
                                image={prod.image}
                                alt="product"
                            />
                            <CardContent>
                                <Typography variant='h5' align='center' >{prod.title}</Typography>
                                
                                <Typography variant='h6'  align='center' >${prod.price}.00</Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Products;
