import BookApi from "../api/book";
import Hero from '../layout/Hero';
import Books from "../components/Books";
import Loading from "../components/Loading";
import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import useStyles from "../styles/styles";

const Index = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await BookApi.index();

    if (result.data){
      setBooks(result.data);
    } else {
      //avisar que aconteceu algum erro
    }

    setLoading(false);
  };

  const onDeleted = async (bookDeleted) => {
    const result = await BookApi.delete(bookDeleted.id);

    if (result.error) {
      // avisar o usuario que aconteceu o erro
      return;
    }
    
    setBooks(books.filter(book => book.id !== bookDeleted.id));
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      <Hero />
      <Container maxWidth="lg" className={classes.container}>
        {loading ? <Loading /> : <Books books={books} onDeleted={onDeleted} /> }
      </Container>
    </>
  )
};

export default Index;
