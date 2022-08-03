import { NextSeo } from 'next-seo';

import CenteredContainer from '@/components/common/CenteredContainer';
import LoginForm from '@/components/user/LoginForm';
import { withLoginPage } from '@/hooks/authHooks';

function Login() {
  return (
    <>
      <NextSeo description='Family Registry log in' title='Log in' />
      <CenteredContainer size={450}>
        <LoginForm />
      </CenteredContainer>
    </>
  );
}

// export const getServerSideProps = withLoginPageSSR();

export default withLoginPage(Login);
