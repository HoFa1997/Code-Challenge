import { Box, Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { getProducts } from "../api/endpoints";
import { IProduct } from "../interface/product";
import ProductListItem from "./ProductListItem";

interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  const [searchField, setSearchField] = useState<string>("");
  const { data, isLoading } = useQuery<IProduct[], any>({
    queryKey: ["productList"],
    queryFn: getProducts,
  });
  const [productData, setProductData] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      if (searchField.length === 0) {
        setProductData(data);
      } else {
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
          <>Loading</>
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
      <Button variant="contained" fullWidth>
        Clear List
      </Button>
    </Box>
  );
};

export default ProductList;
