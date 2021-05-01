import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Library On Rails
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Aplicação de biblioteca usando React.js, Material-UI e Ruby on Rails
      </Typography>
    </footer>
  );
};

export default Footer;
