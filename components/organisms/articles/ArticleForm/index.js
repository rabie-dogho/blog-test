/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, NoSsr, Typography } from '@material-ui/core';
import TextField from '../../../molecules/TextField';
import { editArticle, postArticle } from '../../../../redux/actions';
import RichTextEditor from '../../../molecules/RichTextEditor';
import ImageUploader from '../../../molecules/ImageUploader';

const ArticleForm = ({ article }) => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user);

  const updateArticle = (values) => {
    if (article && article.id) {
      dispatch(editArticle(values, article.id, userId));
    } else {
      dispatch(postArticle(values));
    }
  };

  return (
    <div>
      <Typography variant="h2">
        {article && article.id ? 'Edit Article' : 'Add new Article'}
      </Typography>
      <Formik
        initialValues={{
          userId,
          title: article.title,
          image: article.image,
          body:  article.body ,
       
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Title is required';
          }
          if (!values.image) {
            errors.image = 'Image is Required';
          }
          if (!values.body) {
            errors.body = 'Body is required';
          }

          return errors;
        }}
        onSubmit={updateArticle}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          /* and other goodies */
        }) => {
          const changeBodyContent = (value) => {
            // console.log("triggered change value", value)
            if (value !== '<p><br></p>') {
              setFieldValue('body', value);
            }
          };

          const handleChangeImage = (value) => {
            setFieldValue('image', value);
          };
          return (
            <Form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    id="title"
                    name="title"
                    label="Title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageUploader 
                  onChange={handleChangeImage} 
                  value={values.image}
                  error={ errors.image}
 />
                </Grid>
                <Grid item xs={12}>
                  <NoSsr>
                    <RichTextEditor error={errors.body} value={values.body} onChange={changeBodyContent} />
                  </NoSsr>
                </Grid>

                <Grid item xs={12}>
                  <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
                    Publish
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ArticleForm.propTypes = {
  article: PropTypes.object,
};

ArticleForm.defaultProps = {
  article: {
    title: '',
    image: '',
    body: '',
  },
};
export default ArticleForm;
