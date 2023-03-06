import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box
          sx={{ display: "flex", justifyContent: "space-around" }}
          flexGrow={1}
        >
          <Typography variant="body1">Hossein Fatemi</Typography>
          <Typography variant="body1">Front-End</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
