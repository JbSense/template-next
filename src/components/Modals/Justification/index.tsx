'use client';

import { useForm } from 'react-hook-form';
import BackgroundBlur from 'components/UI/BackgroundBlur';
import CloseButton from 'components/UI/CloseButton';
import PrimaryButton from 'components/UI/PrimaryButton';
import styles from './index.module.css';
import { Frequency } from '@prisma/client';
import { useModal } from 'hooks/useModal';
import { queryClient } from 'services/queryClient';
import { soraFont } from 'utils/fonts';

type JustificationData = {
  justification: string;
};

export default function Justification() {
  const { close } = useModal();
  const { register, handleSubmit } = useForm<JustificationData>();

  const currentFrequency = queryClient.getQueryData([
    'currentFrequency'
  ]) as Frequency;

  const onSubmit = handleSubmit(async (data: JustificationData) => {
    currentFrequency.justification =
      data.justification !== '' ? data.justification : null;

    queryClient.setQueryData(
      ['frequency', currentFrequency.studentId],
      currentFrequency
    );

    return close();
  });

  return (
    <BackgroundBlur>
      <form className={styles.Justification} onSubmit={onSubmit}>
        <CloseButton />

        <p>index</p>

        <textarea
          id="justification"
          cols={30}
          rows={10}
          {...register('justification')}
          className={`${styles['Justification__field']} ${soraFont.className}`}
        ></textarea>

        <PrimaryButton text="Salvar" width="auto" />
      </form>
    </BackgroundBlur>
  );
}
