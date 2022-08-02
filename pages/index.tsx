import { Button, Text } from '@mantine/core';
import { withAuthedPage, withAuthedPageSSR } from 'hooks/authHooks';
import { useAuthUser } from 'next-firebase-auth';

import AppLogo from '@/components/app/AppLogo';
import ColorSchemeToggle from '@/components/app/ColorSchemeToggle';

function Home() {
  const user = useAuthUser();

  return (
    <>
      <Text>Hello</Text>
      <AppLogo />
      <ColorSchemeToggle />
      <Button onClick={user.signOut}>Log out</Button>
    </>
  );
}

export const getServerSideProps = withAuthedPageSSR();

export default withAuthedPage(Home);
