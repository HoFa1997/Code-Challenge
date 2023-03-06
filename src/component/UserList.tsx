import { Box, Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/endpoints";
import { IUser } from "../interface/user";
import UserListItem from "./UserListItem";

interface UserListProps {}

const UserList: FC<UserListProps> = () => {
  const [searchField, setSearchField] = useState<string>("");
  const { data, isLoading } = useQuery<IUser[], any>({
    queryKey: ["userList"],
    queryFn: getUsers,
  });

  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      if (searchField.length === 0) {
        setUserData(data);
      } else {
        const filterRules = data.filter((item) => {
          return (
            item.username.toLowerCase().includes(searchField.toLowerCase()) ||
            item.email.toLowerCase().includes(searchField.toLowerCase())
          );
        });
        setUserData(filterRules);
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
          userData.map(({ id, username, email }) => (
            <UserListItem
              key={id}
              userData={{
                username,
                email,
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

export default UserList;
