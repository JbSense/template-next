import { useState } from 'react';
import styles from './index.module.css';
import { Frequency } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useApi } from 'hooks/useApi';
import { useDate } from 'hooks/useDate';
import { useModal } from 'hooks/useModal';
import { queryClient } from 'services/queryClient';

type SetFrequencyType = {
  studentId: string;
};

export default function SetFrequency({ studentId }: SetFrequencyType) {
  const { dateFormated } = useDate();
  const { getFrequencyByStudentDate } = useApi();
  const [checked, setChecked] = useState<boolean | null>(null);
  const { openJustification } = useModal();

  const { data: frequency } = useQuery({
    queryKey: ['frequency', studentId],
    queryFn: async () => {
      const response = (await getFrequencyByStudentDate(
        studentId,
        dateFormated
      )) as Frequency;

      if (response === null)
        return {
          id: '',
          frequency: null,
          justification: null,
          studentId: null
        };

      setChecked(response.frequency);

      return response;
    }
  });

  const setStyleChecked = () => {
    if (checked === null) return '';

    return checked ? 'true' : 'false';
  };

  const openJustificationModal = async () => {
    if (frequency !== undefined) frequency.studentId = studentId;

    queryClient.setQueryData(['currentFrequency'], frequency);
    openJustification();
  };

  const handleChange = (value: boolean) => {
    setChecked(value);
    queryClient.setQueryData(['frequency', studentId], () => {
      if (frequency !== undefined && frequency !== null) {
        frequency.frequency = value ? true : false;
      }

      return frequency;
    });
  };

  return (
    <div className={styles['Set-frequency']}>
      <p
        className={`${styles['Set-frequency__true']} ${
          styles[setStyleChecked()]
        }`}
        onClick={() => handleChange(true)}
      >
        Presente
      </p>

      <p
        className={`${styles['Set-frequency__false']} ${
          styles[setStyleChecked()]
        }`}
        onClick={() => handleChange(false)}
      >
        Falta
      </p>

      <p
        className={`${styles['Set-frequency__justification']} ${
          styles[frequency?.justification !== null ? 'exist' : '']
        }`}
        onClick={openJustificationModal}
      >
        Justificativa
      </p>
    </div>
  );
}
