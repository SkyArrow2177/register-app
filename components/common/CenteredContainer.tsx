import type { ContainerProps } from '@mantine/core';
import { Center } from '@mantine/core';

import ContentContainer from '@/components/common/ContentContainer';

export default function CenteredContainer(props: ContainerProps) {
  return (
    <ContentContainer {...props} style={{ height: '100%' }}>
      <Center style={{ height: '100%' }}>{props.children}</Center>
    </ContentContainer>
  );
}
