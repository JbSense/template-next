'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAdd } from 'react-icons/md';
import SecondaryButton from 'components/UI/SecondaryButton';
import styles from './index.module.css';
import { useStudent } from 'hooks/useStudent';

export default function ListStudents() {
  const { studentList } = useStudent();
  const pathName = usePathname();

  if (studentList?.length === 0) return <></>;

  return (
    <div className={styles['List-students']}>
      <div className={styles['List-students__title-content']}>
        <h2 className={styles['List-students__title']}>Alunos</h2>
        <Link
          href={`${pathName}/estudante/adicionar`}
          className={styles['List-students__add-student']}
        >
          <MdAdd size={20} color="#fff" />
        </Link>
      </div>

      <table className={styles['List-students__table']}>
        <tbody>
          <tr className={styles['List-students__header']}>
            <th>Nome</th>
            <th>Ações</th>
          </tr>

          {studentList?.map((item) => {
            return (
              <tr key={item.id}>
                <td className={styles['List-students__name']}>{item.name}</td>
                <td>
                  <div className={styles['List-students__actions']}>
                    <Link href={`${pathName}/estudante/${item.id}/editar`}>
                      <SecondaryButton text="Editar" width="auto" />
                    </Link>

                    <Link href={``}>
                      <SecondaryButton text="Excluir" width="auto" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
