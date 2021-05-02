import { GridList } from "@material-ui/core";
import Book from "./Book";
import useStyles from "../styles/styles";

const Books = ({ books, onDeleted }) => {
  const classes = useStyles();

  return (
    <GridList className={classes.books}>
      {books.map((book) => (
        <Book book={book} key={`book-${book.id}`} onDeleted={onDeleted} />
      ))}
    </GridList>
  );
};

export default Books;
