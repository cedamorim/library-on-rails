import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/styles";
import { LinearProgress } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import BookApi from "../api/book";
import Loading from "../components/Loading";

const Edit = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [isSubmiting, setSubmitting] = useState(false);
  const [book, setBook] = useState({});
  const history = useHistory();
  const { id } = useParams();

  const onCancel = () => {
    history.push("/");
  };

  const transformErrors = (error) => {
    return Object.keys(error).reduce((result, key) => {
      return { ...result, [key]: error[key][0] };
    }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await BookApi.get(id);

      if (result.data) {
        setBook(result.data);
        formik.setValues(result.data);
      } else {
        //avisar que aconteceu algum erro
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  const formik = useFormik({
    onSubmit: async (values, { setErrors }) => {
      setSubmitting(true);

      const result = await BookApi.update(book.id, values);

      if (!result.errors) {
        return history.push("/");
      }

      setSubmitting(false);
      setErrors(transformErrors(result.errors));
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Container component="main" maxWidth="md">
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="title"
          label="Titulo"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          disabled={isSubmiting}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="author"
          label="Autor"
          id="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          disabled={isSubmiting}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label="Descrição"
          name="description"
          multiline
          rows={10}
          value={formik.values.description}
          onChange={formik.handleChange}
          disabled={isSubmiting}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="image_url"
          label="Url da imagem"
          name="image_url"
          value={formik.values.image_url}
          onChange={formik.handleChange}
          disabled={isSubmiting}
          error={formik.touched.image_url && Boolean(formik.errors.image_url)}
          helperText={formik.touched.image_url && formik.errors.image_url}
        />

        {isSubmiting ? <LinearProgress /> : ""}
        <div className={classes.buttonEdit}>
          <Button
            type="button"
            color="secondary"
            size="medium"
            className={classes.submit}
            disabled={isSubmiting}
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            size="medium"
            color="primary"
            className={classes.submit}
            disabled={isSubmiting}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Edit;
