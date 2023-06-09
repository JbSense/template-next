import { NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string; date: string } }
) {
  const { id, date } = params;

  const frequency = await prismaCLient.frequency.findFirst({
    where: {
      studentId: id,
      date
    },
    select: {
      id: true,
      frequency: true,
      justification: true
    }
  });

  return NextResponse.json(frequency);
}
