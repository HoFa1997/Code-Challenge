import { Box, Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../api/endpoints";
import { IProduct } from "../interface/product";
import { removeAll } from "../redux/titleSlice";
import ProductListItem from "./ProductListItem";

const ProductList: FC = () => {
  // State variables
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState<string>("");
  const [productData, setProductData] = useState<IProduct[]>([]);

  // Fetch products using react-query hook
  const { data, isLoading } = useQuery<IProduct[], any>({
    queryKey: ["productList"],
    queryFn: getProducts,
  });

  // This useEffect hook is called whenever the search field or data changes.
  // It filters the data based on the search field and updates the product data state.
  // If the search field is empty, it sets the product data to the original data.
  useEffect(() => {
    if (data) {
      // If search field is empty, show all data
      if (searchField.length === 0) {
        setProductData(data);
      } else {
        // Filter data based on search field
        const filterRules = data.filter((item) => {
          return (
            item.title.toLowerCase().includes(searchField.toLowerCase()) ||
            item.description.toLowerCase().includes(searchField.toLowerCase())
          );
        });
        setProductData(filterRules);
      }
    }
  }, [searchField, data]);

  return (
    <Box py={3} flexGrow={1} bgcolor="white" px={2} pt={1}>
      <TextField
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="Search User"
        fullWidth
      />
      <Box my={2} maxHeight="70vh" overflow="auto">
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          productData.map(({ id, title, description }) => (
            <ProductListItem
              key={id}
              productData={{
                title,
                description,
              }}
            />
          ))
        )}
      </Box>
      <Button
        onClick={() => dispatch(removeAll())}
        variant="contained"
        fullWidth
      >
        Clear List
      </Button>
    </Box>
  );
};

export default ProductList;
