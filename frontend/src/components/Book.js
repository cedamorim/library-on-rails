import {
  Button,
  Card,
  CardActions,
  GridListTile,
  GridListTileBar,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { useHistory } from "react-router";
import useStyles from "../styles/styles";
import DialogBook from "./DialogBook";
import auth from "../auth";

const ButtonActions = ({ book }) => {
  const classes = useStyles();
  const history = useHistory();

  const onEdit = (book) => {
    history.push(`/books/${book.id}`);
  };

  const onDelete = (book) => {};

  if (auth.isAuthenticated()) {
    return (
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
          onClick={() => onDelete(book)}
        >
          Deletar
        </Button>
      </CardActions>
    );
  }

  return "";
};

const Book = (props) => {
  const { book } = props;
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
        <GridListTile key={book.title}>
          <img src={"https://via.placeholder.com/200x250"} alt={book.title} />
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
        <ButtonActions book={book} />
      </Card>
    </>
  );
};

export default Book;
