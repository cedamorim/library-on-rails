import Add from "../components/Add";
import BookApi from "../api/book";
import Books from "../components/Books";
import { Container } from "@material-ui/core";
import Filter from "../components/Filter";
import Hero from "../layout/Hero";
import Pagination from "@material-ui/lab/Pagination";
import Store from "../store";
import { useEffect } from "react";
import { useStoreState } from "pullstate";
import useStyles from "../styles/styles";

const Index = () => {
  const classes = useStyles();
  const { books, booksCount, filter, params, currentPage, isLoading } = useStoreState(
    Store
  );

  const fetchData = async (page) => {
    Store.update((s) => {
      s.isLoading = true;
    });

    const result = await BookApi.index({ ...params, page });

    if (result.data) {
      Store.update((s) => {
        s.books = result.data.books;
        s.booksCount = result.data.books_count;
        s.currentPage = page;
        s.isLoading = false;
      });
    } else {
      Store.update((s) => {
        s.isLoading = false;
        s.error = "Ops, aconteceu um erro ao carregar os dados da página";
      });
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onDeleted = async (bookDeleted) => {
    const result = await BookApi.delete(bookDeleted.id);

    if (result.error) {
      Store.update((s) => {
        s.error = result.error;
      });
    }

    Store.update((s) => {
      s.books = books.filter((book) => book.id !== bookDeleted.id);
    });
  };

  const onChange = (e, page) => {
    if (page !== currentPage) {
      fetchData(page);
    }
  };

  const filterBooksBy = () => {
    const regex = new RegExp(`${filter}`, 'gi');

    return [...books].filter((book) => regex.test(book.title) || regex.test(book.author))
  }

  useEffect(() => fetchData(1), []);

  return (
    <>
      <Hero />
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          isLoading ? classes.booksLoading : ""
        }`}
      >
        <Filter />
        <Books books={filterBooksBy()} onDeleted={onDeleted} />
        {booksCount > 0 ? (
          <Pagination
            count={Math.ceil(booksCount / 50)}
            page={currentPage}
            variant="outlined"
            color="primary"
            className={classes.pagination}
            onChange={onChange}
            showFirstButton 
            showLastButton
            disabled={isLoading}
          />
        ) : (
          <></>
        )}
        <Add />
      </Container>
    </>
  );
};

export default Index;
