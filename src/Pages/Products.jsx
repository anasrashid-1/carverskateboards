import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

// icons
import SortIcon from "@mui/icons-material/Sort";
import FilterAltOffSharpIcon from "@mui/icons-material/FilterAltOffSharp";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit, setLimit] = useState(9);
  const [sortingOrder, setSortingOrder] = useState("");
  const [filter, setFilter] = useState("");

  const getUrl = (url) => {
    if (sortingOrder.length > 0) {
      return (url = `${url}&_sort=price&_order=${sortingOrder}`);
    }

    return url;
  };

  const getProducts = async () => {
    let url = getUrl(`http://localhost:8080/products?_limit=${limit}`);
    let res = await axios.get(url);
    // console.log(res);
    const Total = res.headers["x-total-count"];
    setTotalProducts(Total);
    let data = res.data;
    setProductData(data);
  };
  const handeLoadMore = () => {
    if (limit <= totalProducts) {
      setLimit(limit + 6);
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, [limit, sortingOrder]);

  return (
    <div style={{ backgroundColor: "rgb(230, 230, 230)" }}>
      <br />

      {/* <Typography variant="h4" align="center">
        SURFSKATES
      </Typography> */}
      <br />

      {/* sorting ang filtering container */}
      <div style={{ margin: "0 14px" }}>
        {/* <Grid container justifyContent="space-between">
          <Grid item> */}
        {/* <FormControl sx={{ m: 1, minWidth: 185 }}>
              <InputLabel sx={{ display: "flex", alignItems: "center" }}>
                Filter Products&nbsp; 
                
              <FilterAltOffSharpIcon />
              </InputLabel>
              <Select 
                label="product"
                value={filter}
                onChange={(e) => {setFilter(e.target.value)}}
              >
                
                <MenuItem value="categoryA">Low to High</MenuItem>
                <MenuItem value="categoryB">High to Low</MenuItem>
              </Select>
            </FormControl> */}
        {/* <Typography variant="h3" align="right">
              SURFSKATES
            </Typography>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 205 }}>
              <InputLabel sx={{ display: "flex", alignItems: "center" }}>
                Sort By Price&nbsp; <SortIcon />
              </InputLabel>
              <Select
                label="price"
                value={sortingOrder}
                onChange={(e) => {
                  setSortingOrder(e.target.value);
                }}
              >
                <MenuItem value="asc">Low to High</MenuItem>
                <MenuItem value="desc">High to Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid> */}
<Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: "20px" }}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <Typography variant="h4" align="left" sx={{ fontFamily: "sans-serif" }}>
  {"\u00A0"}SURFSKATES
</Typography>

  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <FormControl sx={{ minWidth: "100%" }}>
      <InputLabel sx={{ display: "flex", alignItems: "center" }}>
        <SortIcon />
        Sort
      </InputLabel>
      <Select
        label="Price"
        value={sortingOrder}
        onChange={(e) => {
          setSortingOrder(e.target.value);
        }}
        sx={{ border: "none" }}
      >
        <MenuItem value="asc">Price : Low to High</MenuItem>
        <MenuItem value="desc">Price : High to Low</MenuItem>
      </Select>
    </FormControl>
  </Grid>
</Grid>

      </div>
      <br />

      {/* Products */}
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={3}>
          {productData?.map((prod, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
              <Link
                to={`/product/${prod.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardMedia component="img" image={prod.image} alt="product" />
                  <CardContent>
                    <Typography variant="h5" align="center">
                      {prod.title}
                    </Typography>
                    <br />
                    <Typography variant="h6" align="center">
                      ${prod.price}.00
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        <br />
        <Button
          variant="contained"
          sx={{
            display: "block",
            margin: "0 auto",
            backgroundColor: "rgb(235,216,30)",
            color: "black",
            "&:hover": {
              backgroundColor: "rgb(135,206,30)", // Background color on hover
            },
          }}
          onClick={handeLoadMore}
          disabled={limit >= totalProducts ? true : false}
        >
          Load more...
        </Button>
        <br />
      </div>
    </div>
  );
};

export default Products;
