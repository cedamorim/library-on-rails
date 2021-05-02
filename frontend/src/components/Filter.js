import { InputAdornment, MenuItem, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import Store from "../store";
import { useStoreState } from "pullstate";
import useStyles from "../styles/styles";

const Filter = () => {
  const classes = useStyles();
  const {
    books,
    sortOptions,
    directionOptions,
    sortBy,
    directionBy,
  } = useStoreState(Store);

  const order = (books, sort, direction) => {
    const sortedBooks = [...books].sort((book, nextBook) =>
      book[sort].localeCompare(nextBook[sort])
    );

    if (direction === "desc") {
      return sortedBooks.reverse();
    }

    return sortedBooks;
  };

  const onFiltered = ({ target }) => {
    Store.update((s) => {
      s.filter = target.value;
    });
  };

  const onSortBy = ({ target }) => {
    const newSortedBy = target.value;

    Store.update((s) => {
      s.books = order(books, newSortedBy, directionBy);
      s.sortBy = newSortedBy;
    });
  };

  const onDirectionBy = ({ target }) => {
    const newDirectionBy = target.value;

    Store.update((s) => {
      s.books = order(books, sortBy, newDirectionBy);
      s.directionBy = newDirectionBy;
    });
  };

  return (
    <form className={classes.filter}>
      <TextField
        variant="outlined"
        label="Filtre por titulo ou autor"
        onChange={onFiltered}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        select
        label="Ordenar por"
        value={sortBy}
        onChange={onSortBy}
        variant="outlined"
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Direção"
        value={directionBy}
        onChange={onDirectionBy}
        variant="outlined"
      >
        {directionOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default Filter;
