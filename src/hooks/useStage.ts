'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useApi } from './useApi';
import { useSession } from './useSession';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { StageType } from 'types/stageType';

export const useStage = () => {
  const queryClient = useQueryClient();
  const { getStage, getStageById } = useApi();
  const { push } = useRouter();
  const { schoolNameFormated } = useSession();
  const pathName = usePathname();

  const currentStageId = pathName.split('/')[3];

  const { data: stages } = useQuery({
    queryKey: ['stages'],
    queryFn: async () => {
      const { stage } = await getStage();
      return stage;
    }
  });

  const { data: currentStage } = useQuery({
    queryKey: ['stage'],
    queryFn: async (): Promise<StageType> => {
      const stage = await getStageById(currentStageId);

      return stage;
    }
  });

  const setCurrentStage = (stage: StageType) => {
    queryClient.setQueryData(['stage'], stage);

    push(`${schoolNameFormated}/turmas/${stage.id}`);
  };

  return {
    stages,
    currentStage,
    setCurrentStage,
    currentStageId
  };
};
