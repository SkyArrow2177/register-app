import { Center } from '@mantine/core';
import { NextSeo } from 'next-seo';

import NotFoundCard from '@/components/404/NotFoundCard';
import ContentContainer from '@/components/common/ContentContainer';

export default function NotFound() {
  return (
    <>
      <NextSeo description='404 Page not found' title='Page not found' />
      <ContentContainer size={340} style={{ height: '100%' }}>
        <Center style={{ height: '100%' }}>
          <NotFoundCard />
        </Center>
      </ContentContainer>
    </>
  );
}
