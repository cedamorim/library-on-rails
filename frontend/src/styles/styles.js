import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },

  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  linkTitle: {
    color: theme.palette.background.paper,
  },

  container: {
    paddingTop: "10px;",
    paddingBottom: "10px;",
  },

  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },

  booksLoading: {
    opacity: "0.6"
  },

  books: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },

  book: {
    padding: "4px;",
  },

  bookCard: {
    padding: "0px",
    margin: "2px"
  },

  bookButtons: {
    padding: "0px",
    paddingTop: "8px",
    paddingBottom: "8px",
    justifyContent: "center",
  },

  bookImage: {
    width: "200px",
    height: "250px",
  },

  footer: {
    padding: theme.spacing(6),
    marginTop: "auto",
    backgroundColor: theme.palette.background.paper,
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  dialogImage: {
    float: "left",
    marginRight: "10px",
    marginBottom: "10px",
  },

  dialogText: {
    textAlign: "justify",
  },

  buttonEdit: {
    display: "flex",
    justifyContent: "flex-end",
    "& > button": {
      marginLeft: "10px",
    },
  },

  addButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  pagination: {
    marginTop: "30px",
    marginBottom: "30px",
    "&> ul": {
      justifyContent: "center",
    },
  },
}));

export default useStyles;
