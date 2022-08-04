import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ButtonProps } from '@mantine/core';
import { Button, Divider, Paper, PasswordInput, Space, Text, TextInput } from '@mantine/core';
import {
  IconArrowNarrowRight,
  IconAt,
  IconCheck,
  IconFileArrowRight,
  IconFingerprint,
} from '@tabler/icons';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import type { LoginSchemaT } from '@/types/loginRequest';
import { loginSchema } from '@/types/loginRequest';

export default function LoginForm() {
  // Observe form state
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
  } = useForm<LoginSchemaT>({
    resolver: zodResolver(loginSchema),
  });

  // Event handler for logging in
  function onSubmit({ email, password }: LoginSchemaT) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password).catch(error => {
      if (error.code === 'auth/wrong-password') {
        setError('password', { type: 'server', message: error.message }, { shouldFocus: true });
      } else {
        setError('email', { type: 'server', message: error.message }, { shouldFocus: true });
      }
    });
  }

  // Submit button status indicator
  let loginButtonProps: Partial<ButtonProps> = { rightIcon: <IconArrowNarrowRight /> };
  if (isValidating || isSubmitting) {
    loginButtonProps = { loading: true, loaderPosition: 'right' };
  } else if (isSubmitSuccessful) {
    loginButtonProps = { rightIcon: <IconCheck /> };
  }

  return (
    <Paper style={{ width: '100%' }}>
      <Text color='lime' component='h1' size='xl' weight={700}>
        Log in
      </Text>
      <Text>Log in to access your family registry.</Text>
      <Space h='sm' />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          error={errors?.email?.message}
          icon={<IconAt size={16} />}
          id='email'
          label='Email address'
          placeholder='user@example.com'
          required
          type='email'
          {...register('email')}
        />
        <Space h='xs' />
        <PasswordInput
          error={errors?.password?.message}
          icon={<IconFingerprint size={16} />}
          id='password'
          label='Password'
          placeholder='super-secret-password'
          required
          {...register('password')}
        />
        <Space h='md' />
        <Button color='lime' fullWidth type='submit' variant='light' {...loginButtonProps}>
          Log in
        </Button>
        <Divider my='sm' />
        <Link href='/signup' passHref>
          <Button
            color='orange'
            component='a'
            fullWidth
            rightIcon={<IconFileArrowRight />}
            variant='light'
          >
            New user sign up
          </Button>
        </Link>
      </form>
    </Paper>
  );
}
