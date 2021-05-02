import { Container, Typography } from "@material-ui/core";

import useStyles from "../styles/styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Library On Rails
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Bem vindo ao sistema onde você pode catalogar seus livros, fique a
          vontade para cadastrar, editar e até remover seus livros
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
