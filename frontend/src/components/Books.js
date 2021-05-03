import Book from "./Book";
import { GridList } from "@material-ui/core";
import useStyles from "../styles/styles";

const Result = ({ books, onDeleted }) => {
  if (!books?.length) {
    return <div>Infelizmente não encontramos nenhum livro :(</div>;
  }

  return books.map((book) => (
    <Book book={book} key={`book-${book.id}`} onDeleted={onDeleted} />
  ));
};

const Books = ({ books, onDeleted }) => {
  const classes = useStyles();

  return (
    <GridList className={classes.books}>
      <Result books={books} onDeleted={onDeleted} />
    </GridList>
  );
};

export default Books;
