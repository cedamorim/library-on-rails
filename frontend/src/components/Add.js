import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Store from "../store";
import { useHistory } from "react-router-dom";
import { useStoreState } from "pullstate";
import useStyles from "../styles/styles";

const Add = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated } = useStoreState(Store);

  const onAdd = () => {
    history.push("/books/add");
  };

  if (!isAuthenticated) {
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
