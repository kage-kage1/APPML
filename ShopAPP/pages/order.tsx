import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const OrderPage = () => {
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: {
      username: '',
      diamonds: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t('enter_info')),
      diamonds: Yup.number().required(t('enter_info')).positive().integer(),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle order submission
    },
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('order_now')}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="MLBB Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          margin="normal"
        />
        <TextField
          fullWidth
          id="diamonds"
          name="diamonds"
          label="Number of Diamonds"
          type="number"
          value={formik.values.diamonds}
          onChange={formik.handleChange}
          error={formik.touched.diamonds && Boolean(formik.errors.diamonds)}
          helperText={formik.touched.diamonds && formik.errors.diamonds}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {t('submit')}
        </Button>
      </form>
    </Container>
  );
};

export default OrderPage;
