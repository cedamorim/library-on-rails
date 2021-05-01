import { CircularProgress } from "@material-ui/core";
import useStyles from "../styles/styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
