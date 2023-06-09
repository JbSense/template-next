import { NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string; date: string } }
) {
  const { id, date } = params;

  const frequencies = await prismaCLient.frequency.findMany({
    where: {
      stageId: id,
      AND: {
        date
      }
    }
  });

  return NextResponse.json({ frequencies });
}
