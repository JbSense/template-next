'use client';

import SelectItem from 'components/UI/Select/SelectItem';
import { useStage } from 'hooks/useStage';

export default function SetStage() {
  const { stages, setCurrentStage } = useStage();

  stages?.map((item) => {
    return (
      <SelectItem
        key={item.id}
        id={item.id}
        text={item.nomenclature}
        onCLick={() => setCurrentStage(item)}
      />
    );
  });
}
