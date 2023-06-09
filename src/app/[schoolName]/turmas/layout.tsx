'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CurrentStage from 'components/CurrentStage';
import HeaderTurmas from 'components/Header';
import Select from 'components/UI/Select';
import SelectItem from 'components/UI/Select/SelectItem';
import styles from './layout.module.css';
import { useSession } from 'hooks/useSession';
import { useStage } from 'hooks/useStage';

export default function TurmasLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { stages, setCurrentStage } = useStage();
  const { user } = useSession();
  const pathName = usePathname();

  return (
    <div className={styles['Turmas-layout']}>
      <HeaderTurmas>
        <CurrentStage />

        <Select selected="Selecione a turma">
          {stages?.map((item) => {
            return (
              <SelectItem
                key={item.id}
                id={item.id}
                text={item.nomenclature}
                onCLick={() => setCurrentStage(item)}
              />
            );
          })}

          {user?.level === 'admin' && (
            <div className={styles['Turmas__add']}>
              <Link href={`${pathName}/adicionar`}>Adicionar</Link>
            </div>
          )}
        </Select>
      </HeaderTurmas>
      {children}
    </div>
  );
}
