import { prismaCLient } from 'services/prismaClient';

const byId = async (id: string) => {
  const student = await prismaCLient.student.findUnique({
    where: {
      id
    }
  });

  return student;
};

const byStage = async (stageId: string) => {
  const students = await prismaCLient.student.findMany({
    where: {
      stageId
    },
    select: {
      id: true,
      name: true
    }
  });

  return students;
};

export const getStudent = {
  byId,
  byStage
};
