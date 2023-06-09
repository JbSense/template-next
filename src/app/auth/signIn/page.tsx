'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Field from 'components/UI/Field';
import InvalidField from 'components/UI/InvalidField';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './page.module.css';
import { useAuth } from 'hooks/useAuth';
import { SessionDataType } from 'types/sessionDataType';
import { SignInType } from 'types/signInType';

export default function SignIn() {
  const { login, createSession } = useAuth();
  const { push } = useRouter();
  const [wrongLogin, setWrongLogin] = useState(false);
  const { register, handleSubmit } = useForm<SignInType | FieldValues>();

  const onSubmit = handleSubmit(async (data) => {
    const result = (await login(data as SignInType)) as SessionDataType;

    if (!result) return setWrongLogin(true);

    createSession(result);

    const schoolFormated = result.school.name.replace(/\s/g, '-');

    push(`/${schoolFormated}`);
  });

  return (
    <div className={styles['Sign-in']}>
      <h1 className={styles['Sign-in__title']}>Login</h1>

      <form
        className={styles['Sign-in__form']}
        onSubmit={onSubmit}
        onFocus={() => setWrongLogin(false)}
      >
        {wrongLogin && <InvalidField text="Login incorreto!" />}

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

        <PrimaryButton text="Entrar" width="full" />
      </form>
    </div>
  );
}
