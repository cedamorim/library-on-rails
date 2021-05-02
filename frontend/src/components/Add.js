import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import auth from "../auth";
import useStyles from "../styles/styles";
import { useHistory } from "react-router-dom";

const Add = () => {
  const classes = useStyles();
  const history = useHistory();

  const onAdd = () => {
    history.push("/books/add");
  };

  if (!auth.isAuthenticated()) {
    return <></>;
  }

  return (
    <Fab
      color="primary"
      aria-label="adicionar"
      className={classes.addButton}
      onClick={onAdd}
    >
      <AddIcon />
    </Fab>
  );
};

export default Add;
