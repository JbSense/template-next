'use client';

import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import DateField from 'components/UI/DateField';
import Field from 'components/UI/Field';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './page.module.css';
import { Student } from '@prisma/client';
import { useApi } from 'hooks/useApi';
import { useSession } from 'hooks/useSession';
import { useStage } from 'hooks/useStage';
import { StudentFormType } from 'types/studentFormType';

export default function EstudanteAdicionar() {
  const { register, handleSubmit } = useForm<StudentFormType | FieldValues>();
  const { createStudent } = useApi();
  const { push } = useRouter();
  const { schoolNameFormated } = useSession();
  const { currentStageId } = useStage();

  const onSubmit = handleSubmit(async (data) => {
    data.stageId = currentStageId;
    data.birthdate = `${data.year}-${data.month}-${data.day}`;

    const newStudent = await createStudent(data as Student);

    if (newStudent) return push(`${schoolNameFormated}/turmas`);
  });

  return (
    <div className={styles['Estudante-adicionar']}>
      <h2 className={styles['Estudante-adicionar__title']}>Adicionar aluno</h2>

      <form className={styles['Estudante-adicionar__form']} onSubmit={onSubmit}>
        <Field type="text" name="name" placeholder="Nome" register={register} />

        <DateField register={register} />

        <Field
          type="text"
          name="birthCertificate"
          placeholder="Certidão de Nascimento"
          register={register}
        />

        <div className={styles['Estudante-adicionar__docs']}>
          <Field type="text" name="cpf" placeholder="CPF" register={register} />

          <Field type="text" name="rg" placeholder="RG" register={register} />
        </div>

        {/* <Field type="text" name="nis" placeholder="NIS" register={register} /> */}

        <div className={styles['Estudante-adicionar__parents']}>
          <Field
            type="text"
            name="mother"
            placeholder="Mãe"
            register={register}
          />

          <Field
            type="text"
            name="father"
            placeholder="Pai"
            register={register}
          />
        </div>

        <Field
          type="text"
          name="district"
          placeholder="Bairro"
          register={register}
        />

        <div className={styles['Estudante-adicionar__address']}>
          <Field
            type="text"
            name="street"
            placeholder="Rua"
            register={register}
          />

          <Field
            type="text"
            name="number"
            placeholder="N"
            register={register}
          />
        </div>

        <Field
          type="text"
          name="period"
          placeholder="Período"
          register={register}
        />

        <PrimaryButton text="Salvar" width="full" />
      </form>
    </div>
  );
}
