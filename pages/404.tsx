import { NextSeo } from 'next-seo';

import NotFoundCard from '@/components/404/NotFoundCard';
import CenteredContainer from '@/components/common/CenteredContainer';

export default function NotFound() {
  return (
    <>
      <NextSeo description='404 Page not found' title='Page not found' />
      <CenteredContainer size={340}>
        <NotFoundCard />
      </CenteredContainer>
    </>
  );
}
