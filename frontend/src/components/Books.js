import { GridList } from "@material-ui/core";
import Book from "./Book";
import useStyles from "../styles/styles";

const Books = (props) => {
  const classes = useStyles();
  const { books } = props;

  return (
    <GridList className={classes.books}>
      {books.map((book) => (
        <Book book={book} key={`book-${book.id}`} />
      ))}
    </GridList>
  );
};

export default Books;
