import { Stage } from '@prisma/client';
import { prismaCLient } from 'services/prismaClient';

const byId = async (id: string) => {
  const stage = await prismaCLient.stage.findUnique({
    where: {
      id
    }
  });

  return stage;
};

const bySchool = async (schoolId: string) => {
  const stages = await prismaCLient.stage.findMany({
    where: {
      schoolId
    }
  });

  return stages;
};

const byEmployee = async (id: string) => {
  const stagesTeacher = await prismaCLient.teacher.findMany({
    where: {
      employeeId: id
    },
    select: {
      stageId: true
    }
  });

  const stages: Stage[] = [];

  await Promise.all(
    stagesTeacher?.map(async (item) => {
      const stage = await prismaCLient.stage.findUnique({
        where: {
          id: item.stageId
        }
      });

      if (stage !== null) stages.push(stage);
    })
  );

  return stages;
};

export const getStage = {
  byId,
  bySchool,
  byEmployee
};
