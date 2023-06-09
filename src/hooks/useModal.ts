import { useQuery } from '@tanstack/react-query';
import { queryClient } from 'services/queryClient';

export const useModal = () => {
  const open = () => {
    queryClient.setQueryData(['isModalOpen'], true);
  };

  const close = () => {
    queryClient.setQueryData(['justificationModal'], false);
  };

  const { data: justificationModal } = useQuery({
    queryKey: ['justificationModal'],
    queryFn: (): boolean => {
      const result = queryClient.getQueryData([
        'justificationModal'
      ]) as boolean;

      if (result === undefined) return false;
      return result;
    }
  });

  const openJustification = () => {
    queryClient.setQueryData(['justificationModal'], true);
  };

  return {
    open,
    close,
    justificationModal,
    openJustification
  };
};
