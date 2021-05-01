import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import useStyles from "../styles/styles"

const Book = (props) => {
  const { book } = props;
  const classes = useStyles();

  return (
    <GridListTile key={book.title} className={classes.book}>
      <img src={'https://via.placeholder.com/200x250'} alt={book.title} />
      <GridListTileBar
        title={book.title}
        subtitle={<span>{book.author}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${book.title}`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

export default Book;
