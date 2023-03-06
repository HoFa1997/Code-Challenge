import { Box, Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/endpoints";
import { IUser } from "../interface/user";
import UserListItem from "./UserListItem";
import { useDispatch } from "react-redux";
import { removeAll } from "../redux/titleSlice";

interface UserListProps {}

const UserList: FC<UserListProps> = () => {
  // State variables
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  // Fetch users using react-query hook
  const { data: users, isLoading } = useQuery<IUser[], any>({
    queryKey: ["userList"],
    queryFn: getUsers,
  });

  // This useEffect hook is called whenever the search field or data changes.
  // It filters the data based on the search field and updates the user data state.
  // If the search field is empty, it sets the user data to the original data.
  useEffect(() => {
    if (users) {
      if (searchField.length === 0) {
        setFilteredUsers(users);
      } else {
        const filterRules = users.filter((item) => {
          return (
            item.username.toLowerCase().includes(searchField.toLowerCase()) ||
            item.email.toLowerCase().includes(searchField.toLowerCase())
          );
        });
        setFilteredUsers(filterRules);
      }
    }
  }, [searchField, users]);

  const handleClearList = () => {
    dispatch(removeAll());
  };

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
          <>Loading users ...</>
        ) : (
          filteredUsers.map(({ id, username, email }) => (
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
      <Button onClick={handleClearList} variant="contained" fullWidth>
        Clear list
      </Button>
    </Box>
  );
};

export default UserList;
