import BookApi from "../api/book";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Store from "../store";
import useStyles from "../styles/styles";

const ENTER = 13;

const Search = () => {
  const classes = useStyles();

  const onKeyDown = async (e) => {
    if (e.keyCode === ENTER) {
      Store.update((s) => {
        s.isLoading = true;
      });

      const params = { search: e.target.value };
      const { data } = await BookApi.index(params);

      Store.update((s) => {
        s.books = data.books;
        s.booksCount = data.books_count;
        s.params = params;
        s.currentPage = 1;
        s.isLoading = false;
      });
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Pesquisar"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Search;
