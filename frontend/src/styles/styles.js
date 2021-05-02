import { makeStyles } from "@material-ui/core/styles";

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
    margin: "2px",
  },

  bookButtons: {
    padding: "0px",
    paddingTop: "8px",
    paddingBottom: "8px",
    justifyContent: "center",
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

  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginBottom: "20px",
    marginTop: "20px",
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
  },

  divider: {
    height: 28,
    margin: 4,
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
}));

export default useStyles;
