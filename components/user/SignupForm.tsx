import { zodResolver } from '@hookform/resolvers/zod';
import type { ButtonProps } from '@mantine/core';
import { Button, Divider, Paper, PasswordInput, Space, Text, TextInput } from '@mantine/core';
import {
  IconArrowNarrowRight,
  IconAt,
  IconCheck,
  IconFileArrowRight,
  IconFilePencil,
  IconFingerprint,
  IconSignature,
} from '@tabler/icons';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import type { SignupSchemaT } from '@/types/signupRequest';
import { signupPasswordError, signupSchema } from '@/types/signupRequest';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
  } = useForm<SignupSchemaT>({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(submission: SignupSchemaT) {
    console.log(submission);
  }

  // Submit button status indicator
  let submitButtonProps: Partial<ButtonProps> = { rightIcon: <IconFileArrowRight /> };
  if (isValidating || isSubmitting) {
    submitButtonProps = { loading: true, loaderPosition: 'right' };
  } else if (isSubmitSuccessful) {
    submitButtonProps = { rightIcon: <IconCheck /> };
  }

  return (
    <Paper style={{ width: '100%' }}>
      <Text color='orange' component='h1' size='xl' weight={700}>
        Sign up
      </Text>
      <Text>Create a new family registry here.</Text>
      <Space h='sm' />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          error={errors?.firstname?.message}
          icon={<IconFilePencil size={16} />}
          id='firstname'
          label='Firstname'
          placeholder='Jane'
          required
          type='text'
          {...register('firstname')}
        />
        <Space h='xs' />
        <TextInput
          error={errors?.lastname?.message}
          icon={<IconSignature size={16} />}
          id='lastname'
          label='Lastname'
          placeholder='Doe'
          required
          type='text'
          {...register('lastname')}
        />
        <Space h='xs' />
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
          description={signupPasswordError}
          error={errors?.password?.message}
          icon={<IconFingerprint size={16} />}
          id='password'
          inputWrapperOrder={['label', 'description', 'error', 'input']}
          label='Password'
          placeholder='super-secret-password'
          required
          {...register('password')}
        />
        <Space h='md' />

        <Button color='orange' fullWidth variant='light' {...submitButtonProps} type='submit'>
          Sign up
        </Button>
        <Divider my='sm' />
        <Link href='/login' passHref>
          <Button
            color='lime'
            component='a'
            fullWidth
            rightIcon={<IconArrowNarrowRight />}
            variant='light'
          >
            Already have an account?
          </Button>
        </Link>
      </form>
    </Paper>
  );
}
