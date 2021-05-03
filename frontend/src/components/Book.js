import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  GridListTile,
  GridListTileBar,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import { useEffect, useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import DialogBook from "./DialogBook";
import EditIcon from "@material-ui/icons/Edit";
import InfoIcon from "@material-ui/icons/Info";
import Store from "../store";
import { useHistory } from "react-router";
import { useStoreState } from "pullstate";
import useStyles from "../styles/styles";
import { useTheme } from "@material-ui/core/styles";

const DialogDelete = ({ show, book, onClose, onDeleted }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const onDelete = () => {
    onDeleted(book);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle>Deletar livro</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tem certeza que deseja remover o livro "<strong>{book.title}</strong>"
          ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Não
        </Button>
        <Button onClick={onDelete} color="primary" autoFocus>
          Sim, tenho certeza
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ButtonActions = ({ book, onDeleted }) => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useStoreState(Store);

  const onEdit = (book) => {
    history.push(`/books/${book.id}`);
  };

  if (isAuthenticated) {
    return (
      <>
        <DialogDelete
          show={show}
          book={book}
          onClose={() => setShow(false)}
          onDeleted={onDeleted}
        />
        <CardActions className={classes.bookButtons}>
          <Button
            size="small"
            color="primary"
            onClick={() => onEdit(book)}
            startIcon={<EditIcon />}
          >
            Editar
          </Button>
          <Button
            size="small"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => setShow(true)}
          >
            Deletar
          </Button>
        </CardActions>
      </>
    );
  }

  return <></>;
};

const Book = ({ book, onDeleted }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <>
      <DialogBook
        show={show}
        onClose={() => setShow(false)}
        author={book.author}
        description={book.description}
        title={book.title}
        image_url={book.image_url}
      />
      <Card className={classes.bookCard} elevation={0} square>
        <CardContent style={{padding: '0px', width: '200px', height: '250px'}}>
          <GridListTile key={book.title}>
            <img
              src={book.image_url || "https://via.placeholder.com/200x250"}
              alt={book.title}
              className={classes.bookImage}
            />
            <GridListTileBar
              title={book.title}
              subtitle={<span>{book.author}</span>}
              style={{ bottom: "6px" }}
              actionIcon={
                <Tooltip title="Clique aqui para ver as informações completa do livro">
                  <IconButton onClick={() => setShow(true)}>
                    <InfoIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
              }
            />
          </GridListTile>
        </CardContent>
        <ButtonActions book={book} onDeleted={onDeleted} />
      </Card>
    </>
  );
};

export default Book;
