import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useState } from "react";
import useStyles from "../styles/styles";
import DialogBook from "./DialogBook";

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
      <GridListTile key={book.title} className={classes.book}>
        <img src={"https://via.placeholder.com/200x250"} alt={book.title} />
        <GridListTileBar
          title={book.title}
          subtitle={<span>{book.author}</span>}
          actionIcon={
            <IconButton onClick={() => setShow(true)}>
              <InfoIcon className={classes.icon} />
            </IconButton>
          }
        />
      </GridListTile>
    </>
  );
};

export default Book;
