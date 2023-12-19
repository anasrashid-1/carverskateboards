import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTubeVideo from "./HomePage/Youtube/YouTubeVideo";
import {
  Typography,
  Grid,
  Card,
  Button,
  CardContent,
  Box,
  Alert,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const [prData, setPrData] = useState({});
  const { id } = useParams(); // Destructure id from useParams()

  const getProductData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/products?id=${id}`);
      let data = res.data;
      const [item] = data;
      setPrData(item);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  const handleAddToBag = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    existingItems.push(prData);
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    alert("Product added to cart!");
    // return <Alert severity="success">Product added to cart!</Alert>;
  };
  return (
    <>
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={2}>
          {/* <Box  
            sx={{
            
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'rgb(230, 230, 230)',
    
            }}
          > */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: "none" }}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={prData.image}
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div>
                  {/* Add more carousel items here if needed */}
                  {/* <div className="carousel-item active">
                    <img
                      src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/735/3938/2023_ci_happy_every_day_cx__76754.1686804548.jpg"
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div> */}
                </div>
                {/* Carousel controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                  sx={{ backgroundColor: "black" }} // Apply black background color
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                  sx={{ backgroundColor: "black" }} // Apply black background color
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "rgb(230,230,230)",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent>
                <br />
                <br />
                <Typography variant="h4" align="center">
                  {prData.title}
                </Typography>
                <br />
                <Typography variant="h7" align="left">
                  ${prData.price}.00
                </Typography>
                <br />
                <br />
                <Button
                  onClick={handleAddToBag}
                  variant="contained"
                  color="success"
                  sx={{
                    display: "block", margin: "0 auto", width: '100%', backgroundColor: 'black', color: 'white',
                    "&:hover": {
                      backgroundColor: "rgb(135,206,30)", // Background color on hover
                    },
                  }}
                >
                  ADD TO CART
                </Button>

                <br />
                <br />

                <Typography variant="h9">Description</Typography>
                <hr />
                <Typography variant="h7">{prData.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* </Box> */}
        </Grid>
      </div>
      {/* // How it works */}
      <br />
      <Box>
        <Card>
          {/* <Typography variant="h5" align="left" sx={{padding: '40px'}}>
                HOW IT WORKS
            </Typography>   */}

          {/* <div style={{ position: "relative", paddingBottom: "56.25%" }}>
            <iframe
              title="YouTube Video"
              width="100%"
              height="80%"
              src="https://www.youtube.com/embed/QYmP84HG7c0"
              frameBorder="0"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div> */}
          <YouTubeVideo />
        </Card>
      </Box>
    </>
  );
};

export default ProductDescription;
