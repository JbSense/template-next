'use client';

import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import Field from 'components/UI/Field';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './page.module.css';
import { useApi } from 'hooks/useApi';
import { useSession } from 'hooks/useSession';
import { StageType } from 'types/stageType';

export default function AdicionarTurma() {
  const { register, handleSubmit } = useForm<StageType | FieldValues>();
  const { createStage } = useApi();
  const { push } = useRouter();
  const { schoolNameFormated } = useSession();

  const onSubmit = handleSubmit(async (data) => {
    const newStage = await createStage(data as StageType);

    if (newStage) return push(`${schoolNameFormated}/turmas`);

    return;
  });

  return (
    <div className={styles['Adicionar-turma']}>
      <h2 className={styles['Adicionar-turma__title']}>Adicionar turma</h2>

      <form className={styles['Adicionar-turma__form']} onSubmit={onSubmit}>
        <Field
          type="text"
          name="nomenclature"
          placeholder="Nome"
          register={register}
        />

        <Field type="text" name="room" placeholder="Sala" register={register} />

        <PrimaryButton text="Salvar" width="full" />
      </form>
    </div>
  );
}
