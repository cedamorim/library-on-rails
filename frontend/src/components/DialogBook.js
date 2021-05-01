import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "../styles/styles";
import { Typography } from "@material-ui/core";

const DialogBook = ({
  title,
  author,
  description,
  image_url,
  show,
  onClose,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        fullWidth={true}
      >
        <DialogTitle>
          {title}
          <Typography variant="caption" display="block" gutterBottom>
            {author}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <img src={image_url} alt={title} className={classes.dialogImage} />
          <DialogContentText className={classes.dialogText}>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBook;
