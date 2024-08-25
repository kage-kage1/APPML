import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const LoginPage = () => {
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required(t('enter_info')),
      password: Yup.string().required(t('enter_info')),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle login submission
    },
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('login')}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {t('login')}
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
