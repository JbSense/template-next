'use client';

import { useParams, useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import DateField from 'components/UI/DateField';
import Field from 'components/UI/Field';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './page.module.css';
import { Student } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useApi } from 'hooks/useApi';
import { useSession } from 'hooks/useSession';

export default function EstudanteEditar() {
  const { data: student } = useQuery({
    queryKey: ['student'],
    queryFn: async () => {
      const result = await getStudentById(params.studentId);
      reset(result);
      return result;
    }
  });

  const { register, handleSubmit, reset } = useForm<Student | FieldValues>({
    defaultValues: student
  });
  const { updateStudent } = useApi();
  const { push } = useRouter();
  const { schoolNameFormated } = useSession();
  const params = useParams();
  const { getStudentById } = useApi();

  const onSubmit = handleSubmit(async (data) => {
    const result = await updateStudent(data as Student);

    if (result) return push(`${schoolNameFormated}/turmas`);
  });

  return (
    <div className={styles['Estudante-editar']}>
      <h2 className={styles['Estudante-editar__title']}>Editar aluno</h2>

      <form className={styles['Estudante-editar__form']} onSubmit={onSubmit}>
        <Field
          type="text"
          name="name"
          placeholder="Nome"
          defaultValue={student?.name}
          register={register}
        />

        <DateField register={register} date={student?.birthdate} />

        <Field
          type="text"
          name="birthCertificate"
          placeholder="Certidão de Nascimento"
          defaultValue={student?.birthCertificate}
          register={register}
        />

        <div className={styles['Estudante-editar__docs']}>
          <Field
            type="text"
            name="cpf"
            placeholder="CPF"
            defaultValue={student?.cpf}
            register={register}
          />

          <Field
            type="text"
            name="rg"
            placeholder="RG"
            defaultValue={student?.rg}
            register={register}
          />
        </div>

        {/* <Field type="text" name="nis" placeholder="NIS" register={register} /> */}

        <div className={styles['Estudante-editar__parents']}>
          <Field
            type="text"
            name="mother"
            placeholder="Mãe"
            defaultValue={student?.mother}
            register={register}
          />

          <Field
            type="text"
            name="father"
            placeholder="Pai"
            defaultValue={student?.father}
            register={register}
          />
        </div>

        <Field
          type="text"
          name="district"
          placeholder="Bairro"
          defaultValue={student?.district}
          register={register}
        />

        <div className={styles['Estudante-editar__address']}>
          <Field
            type="text"
            name="street"
            placeholder="Rua"
            defaultValue={student?.street}
            register={register}
          />

          <Field
            type="text"
            name="number"
            placeholder="N"
            defaultValue={student?.number}
            register={register}
          />
        </div>

        <Field
          type="text"
          name="period"
          placeholder="Período"
          defaultValue={student?.period}
          register={register}
        />

        <PrimaryButton text="Salvar" width="full" />
      </form>
    </div>
  );
}
