import { useApi } from './useApi';
import { useStage } from './useStage';
import { useQuery } from '@tanstack/react-query';

export const useStudent = () => {
  const { getStudentByStage } = useApi();
  const { currentStageId } = useStage();

  const { data: studentList } = useQuery({
    queryKey: ['studentList'],
    queryFn: async () => {
      const students = await getStudentByStage(currentStageId);

      return students;
    }
  });

  return {
    studentList
  };
};
