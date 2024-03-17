"use client";

// @packages
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Breakpoint, IconButton, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type TDialog = {
  closeDialog?: () => void;
  isOpenDialog: boolean;
  size?: Breakpoint;
  title: string;
};

const CommonDialog = ({
  children,
  closeDialog,
  isOpenDialog,
  size = "sm",
  title,
}: PropsWithChildren<TDialog>) => {
  return (
    <Dialog open={isOpenDialog} maxWidth={size} fullWidth>
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{title}</Typography>
          {closeDialog && (
            <IconButton size="medium" onClick={closeDialog}>
              <CloseIcon fontSize="medium" />
            </IconButton>
          )}
        </div>
      </DialogTitle>
      <>{children}</>
    </Dialog>
  );
};

export default CommonDialog;
