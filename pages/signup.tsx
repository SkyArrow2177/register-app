import { NextSeo } from 'next-seo';

import CenteredContainer from '@/components/common/CenteredContainer';
import SignupForm from '@/components/user/SignupForm';

export default function Signup() {
  return (
    <>
      <NextSeo description='Create an account for your personal registry' title='Sign up' />
      <CenteredContainer size={450}>
        <SignupForm />
      </CenteredContainer>
    </>
  );
}
