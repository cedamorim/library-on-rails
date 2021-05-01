import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    flexGrow: 1
  },
  
  linkTitle: {
    color: theme.palette.background.paper
  },

  container: {
    paddingTop: "4px;"
  },

  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px"
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
}));

export default useStyles;
