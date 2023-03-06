import { FC } from "react";
import { Box, Grid } from "@mui/material";
import Header from "./layout/header";
import ProductList from "./ProductList";
import SelectedList from "./SelectedList";
import UserList from "./UserList";

const MainComponents: FC = () => {
  return (
    <Box bgcolor="gray" height={"100vh"}>
      <Header />
      <Grid container columnSpacing={3} px={3}>
        <Grid item xs={4}>
          <UserList />
        </Grid>

        <Grid item xs={4}>
          <ProductList />
        </Grid>

        <Grid item xs={4}>
          <SelectedList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainComponents;
