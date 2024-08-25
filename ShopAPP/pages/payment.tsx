import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const PaymentPage = () => {
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required(t('enter_info')),
      expirationDate: Yup.string().required(t('enter_info')),
      cvv: Yup.string().required(t('enter_info')),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle payment submission
    },
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('payment')}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="cardNumber"
          name="cardNumber"
          label="Card Number"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
          margin="normal"
        />
        <TextField
          fullWidth
          id="expirationDate"
          name="expirationDate"
          label="Expiration Date"
          value={formik.values.expirationDate}
          onChange={formik.handleChange}
          error={formik.touched.expirationDate && Boolean(formik.errors.expirationDate)}
          helperText={formik.touched.expirationDate && formik.errors.expirationDate}
          margin="normal"
        />
        <TextField
          fullWidth
          id="cvv"
          name="cvv"
          label="CVV"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          error={formik.touched.cvv && Boolean(formik.errors.cvv)}
          helperText={formik.touched.cvv && formik.errors.cvv}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {t('submit')}
        </Button>
      </form>
    </Container>
  );
};

export default PaymentPage;
