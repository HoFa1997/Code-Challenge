import { Avatar, Box, BoxProps, styled, Typography } from "@mui/material";
import { FC } from "react";

import ImageIcon from "@mui/icons-material/Image";

interface UserListItemProps {
  userData: { username: string; email: string };
}
const MainDiv = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 16,
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[600],
  cursor: "pointer",
}));

const ImgDiv = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: theme.palette.grey[300],
  marginRight: 8,
}));

const UserListItem: FC<UserListItemProps> = ({ userData }) => {
  return (
    <MainDiv p={2}>
      <ImgDiv>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ImgDiv>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" color={"black"}>
          {userData.username}
        </Typography>
        <Typography variant="body2">{userData.email}</Typography>
      </Box>
    </MainDiv>
  );
};

export default UserListItem;
