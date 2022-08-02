import { withLoginPage, withLoginPageSSR } from 'hooks/authHooks';

import CenteredContainer from '@/components/common/CenteredContainer';
import LoginForm from '@/components/login/LoginForm';

function Login() {
  return (
    <CenteredContainer size='xs'>
      <LoginForm />
    </CenteredContainer>
  );
}

export const getServerSideProps = withLoginPageSSR();

export default withLoginPage(Login);
