import CenteredContainer from '@/components/common/CenteredContainer';
import LoginForm from '@/components/user/LoginForm';
import { withLoginPage, withLoginPageSSR } from '@/hooks/authHooks';

function Login() {
  return (
    <CenteredContainer size={450}>
      <LoginForm />
    </CenteredContainer>
  );
}

export const getServerSideProps = withLoginPageSSR();

export default withLoginPage(Login);
