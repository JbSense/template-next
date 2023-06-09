import { NextResponse } from 'next/server';
import { getStudent } from 'queries/getStudent';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const students = await getStudent.byStage(id);

  return NextResponse.json(students);
}
