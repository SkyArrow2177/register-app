import CenteredContainer from '@/components/common/CenteredContainer';
import LoginForm from '@/components/login/LoginForm';
import { withLoginPage, withLoginPageSSR } from '@/hooks/authHooks';

function Login() {
  return (
    <CenteredContainer size='xs'>
      <LoginForm />
    </CenteredContainer>
  );
}

export const getServerSideProps = withLoginPageSSR();

export default withLoginPage(Login);
