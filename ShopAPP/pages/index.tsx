import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Typography variant="h3" gutterBottom>{t('welcome')}</Typography>
      <Link href="/order" passHref>
        <Button variant="contained" color="primary">{t('order_now')}</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
