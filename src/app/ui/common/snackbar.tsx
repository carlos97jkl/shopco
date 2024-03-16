"use client";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { closeSnackbar } from "@/app/redux/slices/alert";

const SnackBar = () => {
  const dispatch = useDispatch();
  const openSnackbar = useSelector((state: any) => state.alert.show);
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
      message="Note archived"
    />
  );
};

export default SnackBar;
