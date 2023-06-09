'use client';

import { FormEvent } from 'react';
import Date from 'components/Date';
import SetFrequency from 'components/SetFrequency';
import PrimaryButton from 'components/UI/PrimaryButton';
import Table from 'components/UI/Table';
import Cell from 'components/UI/Table/Cell';
import Row from 'components/UI/Table/Row';
import styles from './page.module.css';
import { Frequency } from '@prisma/client';
import { useApi } from 'hooks/useApi';
import { useDate } from 'hooks/useDate';
import { useStage } from 'hooks/useStage';
import { useStudent } from 'hooks/useStudent';
import { queryClient } from 'services/queryClient';

export default function Frequencias() {
  const { studentList } = useStudent();
  const { currentStageId } = useStage();
  const { upsertFrequency } = useApi();
  const { dateFormated } = useDate();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    return studentList?.map(async (item) => {
      const frequency = queryClient.getQueryData([
        'frequency',
        item.id
      ]) as Frequency;

      frequency.date = dateFormated;
      frequency.stageId = currentStageId;
      frequency.studentId = item.id;

      await upsertFrequency(frequency);

      return;
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.Frequencias}>
      <h2 className={styles['Frequencias__title']}>Frequências</h2>

      <div className={styles['Frequencias__date']}>
        <Date />
      </div>

      <Table>
        {studentList?.map((item) => {
          return (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>
                <div className={styles['Frequencies__actions']}>
                  <SetFrequency studentId={item.id} />
                </div>
              </Cell>
            </Row>
          );
        })}
      </Table>

      <PrimaryButton text="Salvar" width="auto" />
    </form>
  );
}
