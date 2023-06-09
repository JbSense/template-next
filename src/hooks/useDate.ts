import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from 'services/queryClient';

export const useDate = () => {
  const [date, setDate] = useState(new Date());

  const { data: day } = useQuery({
    queryKey: ['day'],
    queryFn: () => dateFormated
  });

  const dateFormated = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short'
  })
    .format(date)
    .replaceAll('/', '-');

  const changeDay = (action: string) => {
    if (action === 'next') date?.setDate(date.getDate() + 1);
    if (action === 'back') date?.setDate(date.getDate() - 1);
    queryClient.setQueryData(['day'], date);
    setDate(date);
  };

  const separateDate = (date: string) => {
    const separate = date.split('-');

    return {
      day: separate[0],
      month: separate[1],
      year: separate[2]
    };
  };

  return {
    day,
    dateFormated,
    separateDate,
    changeDay
  };
};
