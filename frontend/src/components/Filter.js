import { InputAdornment, MenuItem, TextField } from "@material-ui/core";

import BookApi from "../api/book";
import SearchIcon from "@material-ui/icons/Search";
import Store from "../store";
import { useStoreState } from "pullstate";
import useStyles from "../styles/styles";

const Filter = () => {
  const classes = useStyles();
  const {
    filter,
    currentPage,
    sortOptions,
    directionOptions,
    sortBy,
    directionBy,
  } = useStoreState(Store);

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  const search = async (filter, sort, direction, page = currentPage) => {
    const params = {
      search: filter,
      orderBy: sort,
      direction: direction,
      page: page,
    };

    const { data } = await BookApi.index(params);

    Store.update((s) => {
      s.books = data.books;
      s.booksCount = data.books_count;      
      s.params = params;
      s.currentPage = page;
    });
  };

  const onFiltered = debounce(({ target }) => {
    const newFilter = target.value;

    search(newFilter, sortBy, directionBy, 1);

    Store.update((s) => {
      s.filter = newFilter;
    });
  }, 500);

  const onSortBy = ({ target }) => {
    const newSortedBy = target.value;

    search(filter, newSortedBy, directionBy);

    Store.update((s) => {
      s.sortBy = newSortedBy;
    });
  };

  const onDirectionBy = async ({ target }) => {
    const newDirectionBy = target.value;

    search(filter, sortBy, newDirectionBy);

    Store.update((s) => {
      s.directionBy = newDirectionBy;
    });
  };

  return (
    <form className={classes.filter}>
      <TextField
        variant="outlined"
        label="Filtre por titulo ou autor"
        defaultValue={filter}
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
