import type { ContainerProps } from '@mantine/core';
import { Container } from '@mantine/core';

export default function ContentContainer(props: ContainerProps) {
  return (
    <Container
      {...props}
      sx={theme => ({
        [theme.fn.smallerThan('md')]: {
          padding: '0',
        },
      })}
    />
  );
}
