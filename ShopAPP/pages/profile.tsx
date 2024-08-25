import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Typography } from '@mui/material';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const ProfilePage = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Typography variant="h4">{t('profile')}</Typography>
      <Typography variant="body1">{t('user_info')}</Typography>
    </Container>
  );
};

export default ProfilePage;
