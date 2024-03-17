"use client";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { closeSnackbar } from "@/app/redux/slices/alert";
import { RootState } from "@/app/redux/store";

const SnackBar = () => {
  const dispatch = useDispatch();
  const { show, message } = useSelector((state: RootState) => state.alert);
  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
      message={message}
    />
  );
};

export default SnackBar;
