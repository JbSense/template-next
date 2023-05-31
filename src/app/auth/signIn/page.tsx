'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Field from 'components/UI/Field';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './page.module.css';
import { useAuth } from 'hooks/useAuth';
import { SignInType } from 'types/signInType';

export default function SignIn() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<SignInType | FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await login(data as SignInType);

    console.log(result);
  });

  return (
    <div className={styles['Sign-in']}>
      <h1 className={styles['Sign-in__title']}>Login</h1>

      <form className={styles['Sign-in__form']} onSubmit={onSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="E-mail"
          register={register}
        />

        <Field
          type="password"
          name="password"
          placeholder="Senha"
          register={register}
        />

        <PrimaryButton text="Entrar" />
      </form>
    </div>
  );
}
