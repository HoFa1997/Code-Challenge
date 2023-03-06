import { Box, BoxProps, Chip, styled } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/store";
import { removeTitleByTitle } from "../redux/titleSlice";

const MainDiv = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: "100%",
  paddingTop: 24,
  paddingBottom: 24,
  background: "white",
  paddingLeft: 16,
  paddingRight: 16,
}));

const SelectedList: FC = () => {
  const titles = useSelector((state: StoreState) => state.title.titleList);
  const dispatch = useDispatch();

  // click Handler for remove title
  const handleChipClick = (index: number) => {
    dispatch(removeTitleByTitle(index));
  };

  //Get data from redux store
  const renderChips = () => {
    return titles.map((item, index) => (
      <Chip
        key={index}
        label={item}
        color="primary"
        variant="filled"
        onClick={() => handleChipClick(index)}
        sx={{ m: 0.5 }}
      />
    ));
  };

  return (
    <MainDiv flexGrow={1}>
      {titles.length === 0 ? <>Empty List</> : renderChips()}
    </MainDiv>
  );
};

export default SelectedList;
