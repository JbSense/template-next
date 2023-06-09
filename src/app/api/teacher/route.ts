import { NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';
import { TeacherType } from 'types/teacherType';

export async function GET() {
  const teachers = await prismaCLient.teacher.findMany();

  return NextResponse.json({ teachers });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { employeeId, stageId }: TeacherType = body;

  const teacher = await prismaCLient.teacher.create({
    data: {
      employeeId,
      stageId
    }
  });

  return NextResponse.json({ teacher });
}
